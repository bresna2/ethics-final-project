
import {Page, TextSection} from '../components';
import {Typography} from "@mui/material";

export default function HomePage() {
  const url = window.location.href;

  return (
    <Page title="Home">
        <Typography>
          On March 25, 2026, a jury in Los Angeles released a landmark verdict finding Meta and Google liable for negligence in over 37,000 cases of social media addiction in minors. Furthermore, 
          multiple groups of researchers have found a strong correlation between excessive social media usage and mental health problems such as “distress, life dissatisfaction, and depression” 
          (Nikolinakou et al.). This study will examine the details of the court case, including the “casino-like” tactics that social media employs to create psychological cravings. Specifically, 
          we will be examining various dark patterns including infinite feeds, recommendation algorithms, and predatory notification systems designed to weaponize social reciprocity. In addition, 
          we will look at the vast side effects of these designs, especially on the youth, including the alleged anxiety and depression perpetuated by frequent social media usage. 
        </Typography>

        <TextSection header="About the Case">
          <Typography sx={{pt:3}}>There has been a wave of recent lawsuits brought against the social media industry centering around allegations that they deliberately design their platforms to be addictive for children and teenagers. The most prominent of these is the recent case K.G.M v. Meta et al, which resulted in a landmark jury verdict in Los Angeles during March 2026. The jurors found Meta and Google liable for harming a young woman’s mental health through their addictive design. The plaintiff, Kaley, was joined by testimony and support from thousands of parents, many of which have lost children to the same mental health issues. Kaley argued that she became severely depressed and anxious, and suffered from body dysmorphia and suicidal thoughts as a result of compulsive social media use. After more than 40 hours of deliberation, the jury concluded that Instagram and Youtube were negligent in the design and operation of their platforms and failed to adequately inform users of the psychological risks associated with excessive use.</Typography>
          <Typography sx={{pt:3}}>The main arguments presented in the lawsuit were claims that the companies intentionally engineered features using principles from behavioral psychology to maximize user retention and screen time, specifically amongst the youth. Attornies brought up specific tools such as infinite feed, autoplay, recommendation algorithms, notifications, and validation metrics and how they were optimized to keep users addicted. More information on these features can be found on the <a href={`${url}dark-patterns`}>dark patterns page</a>. During the trial, documents were brought to light about the companies dismissing concerns from employees and external sources about the mental health harms of these designs. These files also showed that the companies knowingly utilized the same strategies as the tobacco and gambling industry, emphasizing intermittent rewards and unpredictable content delivery to reinforce compulsive habits.</Typography>
          <Typography sx={{pt:3}}>This case is especially important because it set a legal precedent for the tech industry’s responsibility and duty to protect its and inform its users. These companies have been protected for years under the free speech laws, arguing that they are not responsible for harmful content that users post. However, the trial focused more on the design of the platforms rather than the content, directly pointing the finger at the designers and developers. Meta and Google continue to deny wrongdoing, but since March, thousands of additional lawsuits have been filed, many of which have survived early dismissal attempts thanks to this precedent.</Typography>
        </TextSection>

        <TextSection header="Ethical Issues">
          <Typography sx={{pt:3}}>The major ethical issue presented by this case is the responsibility for user well-being versus user agency. Social media companies argue that users choose to engage with their services, but many would contend that the design heavily influences these “choices” and limits the agency of the user. The court ruled that it is the companies responsibility and duty to inform the user of the risks and minimize customer retention strategies to allow for informed user autonomy. Additionally, the legal system has determined that it is the right of the user to post freely on platforms without the platform being held liable for content, but the design of the interface provably exploits human cognitive biases in a manner that extends beyond exposure to harmful content and into addiction to it.</Typography>
          <Typography sx={{pt:3}}>Being that these lawsuits focus on teenagers and children, who are more susceptible to habit forming and social comparison, this brings up the ethical duty of care toward minors. If companies are knowingly optimizing engagement while being aware of and hiding the potential mental health risks, this is a failure of corporate responsibility. The broad reach of these platforms can have dire consequences for the future of the community and its individuals. Read more about the effects of excessive social media and screen usage on the <a href={`${url}research`}>research page.</a>The current state of the industry is comparable to that of gambling and tobacco, whose products are designed to be inherently habit-forming despite knowing the risks.</Typography>
          <Typography sx={{pt:3}}>Overall, these lawsuits are not just about liability and compensation, they are creating a broader ethical question over whether it is acceptable to design digital spaces that are intentionally and knowingly harming users for profit.</Typography>
        </TextSection>
    </Page>
  )
}

