import {screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('it displays the primary language from repository', () => {
const repository = {
    language: 'Javascript',
    stargazers_count: 5,
    forks: 30,
    open_issues: 1
};
    render(<RepositoriesSummary repository={repository} />);

    const language = screen.getByText('Javascript');

    expect(language).toBeInTheDocument();
});

test('displays information about the repository throw the loop', () => {
    const repository = {
        language: 'Javascript',
        stargazers_count: 5,
        forks: 30,
        open_issues: 1
    };
        render(<RepositoriesSummary repository={repository} />);
    
        for (let key in repository) {
       const value = repository[key];
       const el = screen.getByText(new RegExp(value));
       expect(el).toBeInTheDocument();

        }
     
});
 