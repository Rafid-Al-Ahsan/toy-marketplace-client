import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(response => response.json())
            .then(data => setToys(data))
    }, [])

    const hero = toys.filter(toy => toy.type === 'Hero');
    const villan = toys.filter(toy => toy.type === 'Villan');
    const female = toys.filter(toy => toy.type === 'Female');

    return (
        <div className='w-[90%] m-auto'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Male SuperHero</Tab>
                    <Tab>Villan</Tab>
                    <Tab>Female SuperHero</Tab>
                </TabList>
                <TabPanel>
                    <div className='w-[50%]'>
                        {hero.map(toy => <Card key={toy.id} toy={toy}></Card>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="w-[50%]">
                        {villan.map(toy => <Card key={toy.id} toy={toy}></Card>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='w-[50%]'>
                        {female.map(toy => <Card key={toy.id} toy={toy}></Card>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;

function Card({ toy }) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
            <figure><img src={toy.img} alt="Album" className='w-[85%]'/></figure>
            <div className="card-body">
                <h2 className="card-title font-bold italic text-2xl">{toy.name}</h2>
                <h4 className='flex text-lg text-[#a3174f]'>{toy.price}</h4>
                <p>{toy.description}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary bg-[#a3174f] px-10 mt-10">View Details</button>
                </div>
            </div>
        </div>
    )
}