import React, {useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import { useParams } from "react-router-dom";
import termites from "../../assets/images/termite-landing.jpg";
import rats from "../../assets/images/rats.jpg"
// import ProblemsComp from "../../components/TermitesProblemsComp/TermitesProblemsComp";
import TermitesProblemsComp from "../../components/TermitesProblemsComp/TermitesProblemsComp";
import AntsProblemsComp from "../../components/AntsProblemsComp/AntsProblemsComp";
import RodentsProblemsComp from "../../components/RodentsProblemsComp/RodentsProblemsComp";
import TabComponent from "../../components/TabComponent/TabComponent";
import TabsImageOne from "../../assets/images/Tabs-image-one.jpg"

export default function ProblemsPage() {
  const {issue} = useParams();

  const pestType = issue;

  console.log("PEST TYPE IS", pestType)

 
    

  // const pest = pestProblems.find(p => p.type === issue);

  const pestComponents = {
    "termites": TermitesProblemsComp,
    "ants": AntsProblemsComp,
    "rodents":RodentsProblemsComp
  };

  const PestComponent = pestComponents[issue];

  const tabs = [
    {
      title: '1.Risk Analysis',
      text: 'We will address your pest issue, conduct a survey if needed, and offer a detailed quote along with recommendations',
      points: ['Expert and Experienced in our Field','We schedule appointment at your convinience', 'We have Pest Management solutions customized for your specific pest issues'],
      
      image: TabsImageOne,
    },
    {
      title: '2.Pest Treatment',
      text: 'Our skilled technicians will provide professional service at your location.',
      points: ['Highly trained and knowledgeable technicians.','Advanced pest control products and services.', 'Adherence to Safety, Health & Environment'],
      image: rats,
    },
    {
      title: '3.Query Management',
      text: '"Our dedicated customer care team is here to address all your inquiries and concerns.',
      points: ['Service Guarantee','Pest Awareness Programs'],
      image: termites,
    },
  ];

  return (
    <>
      <Navbar />
      <Banner title={issue} />
      {/* <ProblemsComp pestProblemType = {pest}/> */}

      <PestComponent />
      <TabComponent tabs={tabs}/>
      

      <Footer />
    </>
  );
}
