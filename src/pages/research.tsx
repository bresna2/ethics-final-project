
import { Typography } from '@mui/material';
import {Page, TextSection} from '../components';


export default function ResearchPage() {


  return (
    <Page title="Research">

        <TextSection header = "Mental Health">
          <Typography sx={{pt:3}}>
            Excessive social media usage has become increasingly associated with various psychological and cognitive issues, specifically in children and young adults. REsearchers have found a strong correlation with problematic social media usage and higher rates of depression, loneliness, anxiety, and self-regulation. In 2022, a study published in <a aria-label="External link to 2022 study from JMIR Mental Health" href="https://mental.jmir.org/2022/4/e33450/">JMIR Mental Health</a> showed that problematic social media use was strongly linked to poorer mental health and psychological well-being including symptoms of depression and stress. Every year, these symptoms are becoming more prominent in adolescents. Although researchers say it is difficult to prove causation, they warn that these problems are augmented by the addictive designs that inhibit compulsive screen use and negative self-image. 
          </Typography>
        </TextSection>

        <TextSection header = "Brain Function and Structure">
          <Typography sx={{pt:3}}>A 2024 study published in <a aria-label="External link to Neuropsychology Review study on disorder screen use" href="https://pubmed.ncbi.nlm.nih.gov/37695451/">Nueropsychology Review</a> found that “disordered screen use behaviors” were associated with poorer executive control, memory, decision-making, and self-regulatiog. Researchers argue that the highly stimulating, low quality digital environments can condition the brain toward "novelty seeking,” making it harder to focus and think critically.</Typography>
          <Typography sx={{pt:3}}>Another study published in <a aria-label="external link to Pyschiatry Research study on cognitive abilities and screen use" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10852174/">Psychiatry Research</a> used data from 2017 and 2019 in american youths compared cognitive abilities between piers and found that higher amounts of screen exposure is strongly associated with serious cognitive difficulties. Yet another study from the <a aria-label="External link to study from adolescent brain cognitive development" href="https://abcdstudy.org/">Adolescent Brain Cognitive Development (ABCD)</a> found associations between increased social media use and reduced cognitive performance with memory, vocabulary, and reading comprehension as well as impulsivity and behaviors related to ADHD. .</Typography>
          <Typography sx={{pt:3}}>Lastly, a <a aria-label="External link to study from science direct" href="https://www.sciencedirect.com/science/article/pii/S1053811926001771">neuroimaging study</a> published in 2023 found that greater social media use is linked with physical, structural, and functional changes in brain regions related to attention, reward processing, and emotional regulation such as the hippocampus, caudate, and thalamus.</Typography>
        </TextSection>

        <TextSection header="Conclusion">
            <Typography sx={{pt:3}}>It is important to remember that social media itself is not universally harmful, and causation cannot be proven, but the consensus between researchers (as well as anecdotal evidence) is that excessive and compulsive use of technology during critical stages of brain development negatively affects mental health, concentration, self-regulation, and cognitive functioning.</Typography>
        </TextSection>
    </Page>
  )
}
