
import {  Typography } from '@mui/material';
import {Page,Forum,TextSection} from '../components';

const questions = [
    "How has social media and technology addiction affected friends, family members, or people around you?",
    "How has social media and technology addiction affected you personally? Do you find yourself reaching for your phone as a coping mechanism in uncomfortable moments? Do you feel reoccurring stress or self loathing about your social presence and standing? How much time have you spent scrolling, playing games, or otherwise isolated when you could have been working, learning, creating, resting, or socializing face to face? Have you ever experienced phantom buzzing or notifications?",
    "How has social media changed the way we interact with each other? How often do you see people utilizing their phone as a way to avoid interaction?",
    "Do you feel concerned about the new generation whose world view and brain development is being shaped by social media? How do you think this will translate into adulthood?",
    "How do you see social media's place in the future of our society? Do you think stricter regulations should be put into place to protect our culture from the harmful side effects while maintaining the positive aspects?"
];


export default function DiscussionPage() {


  return (
    <Page title="Discussion">
      
        <Typography sx={{pb:5}}>
            We strive to make a platform where people can talk openly about their struggles, ask questions, and engage in
            meaningful conversation that can inspire cultural change. Below, we have some reflection questions to spark
            discussion, as well as an anonymous forum space for you to say what's on your mind.
        </Typography>

        <TextSection header="Discussion Questions">
          {questions.map((q) =>  <Typography sx={{pt:3}}>{q}</Typography>)}
        </TextSection>

        <TextSection header="Share Your Thoughts, Questions, or Advice">
          <Forum/>
        </TextSection>
        
    </Page>
  )
}
