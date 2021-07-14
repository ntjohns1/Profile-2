import React from 'react';
import Project from '../components/Project';
import { Container, CardGroup, Row } from 'react-bootstrap';

const projects = [
    {
        name: 'Music Notes',
        image: '../MusicNotes.png',
        deployed: 'https://uncbootcampmusicnotes.herokuapp.com/',
        repo: 'https://github.com/ntjohns1/Music-Notes'
    },
    {
        name: 'Tabletop Auction House',
        image: '../TTAH.png',
        deployed: 'https://github.com/smakela13/tabletop-auction-house-react-edition',
        repo: 'https://github.com/smakela13/tabletop-auction-house-react-edition'
    },
    {
        name: 'Stock News',
        image: '../StockNews.png',
        deployed: 'https://ntjohns1.github.io/-tock-News/',
        repo: 'https://github.com/ntjohns1/-tock-News'
    },
    {
        name: 'Fitness Tracker',
        image: '../FitnessTracker.png',
        deployed: 'https://github.com/ntjohns1/Fitness-Tracker',
        repo: 'https://github.com/ntjohns1/Fitness-Tracker'
    },
    {
        name: 'Tech Blog',
        image: '../TechBlog.png',
        deployed: 'https://infinite-atoll-74792.herokuapp.com/',
        repo: 'https://github.com/ntjohns1/tech-blog'
    },
    {
        name: 'Note Taker',
        image: '../NoteTaker.png',
        deployed: 'https://evening-savannah-32907.herokuapp.com/',
        repo: 'https://github.com/ntjohns1/Note_Taker'
    },
];

const renderProjects = () => {
    return (
        projects.map((project, i) => {
            return (
                <Project project={project} key={i + Date.now()} />
            );
        })
    );
};

export default function Work() {
    return (
        <Container className='my-2'>
            <CardGroup id="work">
                <Row xs={1} md={2}>
                    {renderProjects()}
                </Row>
            </CardGroup>
        </Container>
    );
};