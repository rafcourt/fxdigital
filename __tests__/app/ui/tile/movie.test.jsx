import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import MovieTile from '@/app/ui/tile/movie'
import mockRouter from 'next-router-mock'
import renderer from 'react-test-renderer';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'));

describe('Movie Tile', () => {
    it('Renders a tile containing a link and an image.', () => {
        mockRouter.push("/home");
        render(<MovieTile />);
    
        const image = screen.getByRole('img');
        const link = screen.getByRole('link');
    
        expect(image).toBeInTheDocument();
        expect(link).toBeInTheDocument();
    })
    it('Matches the src of the image and the href of the link in the tile.', () => {
        mockRouter.push("/home");
        const mockTile = {
            original_title: 'Blockbuster Movie',
            poster_path: '/mock/poster/path.png',
            id: 123456,
            media_type: 'movie'
        };
        render(<MovieTile 
            title={ mockTile.original_title } 
            imagePath={ mockTile.poster_path }
            id={ mockTile.id }
            media_type={ mockTile.media_type }
            />);
    
        const image = screen.getByRole('img');
        const link = screen.getByRole('link');
    
        expect(image.src).toMatch(new RegExp(encodeURIComponent(`https://image.tmdb.org/t/p/w185${mockTile.poster_path}`)));
        expect(link.href).toMatch(new RegExp(`/details/${mockTile.media_type}/${mockTile.id}`));
    })
    it.skip('Opens the details screen', () => {
        mockRouter.push("/home");
        const mockTile = {
            id: 123456,
            media_type: 'movie'
        };
        render(<MovieTile 
            id={ mockTile.id }
            media_type={ mockTile.media_type }
            />);

        const link = screen.getByTestId ('testid');
        fireEvent.keyPress(link, {key: 'Enter', code: 'Enter', charCode: 13});
        
        expect(mockRouter).toMatchObject({ 
            asPath: `/details/${mockTile.media_type}/${mockTile.id}`,
          });
    })

    it('snapshot matches', () => {
        const mockTile = {
            original_title: 'Blockbuster Movie',
            poster_path: '/mock/poster/path.png',
            id: 123456,
            media_type: 'movie'
        };
        const tree = renderer
          .create(<MovieTile 
            title={ mockTile.original_title } 
            imagePath={ mockTile.poster_path }
            id={ mockTile.id }
            media_type={ mockTile.media_type }
            testId="test-id"
            />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
  })

