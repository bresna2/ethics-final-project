
import {Page, TextSection} from '../components';
import {Typography} from "@mui/material";


export default function DarkPatternsPage() {

  const patterns = [
    {
        title: "Infinite Feed and Ludic Loops",
        description: "Social media platforms frequently use infinite scrolling to keep users engaged for longer than intended. Infinite feeds continuously load new content without interruption, removing opportunities and cues for the user to take a break or otherwise become unengaged. This exploits a psychological principle known as the Ludic Loop. This includes an immediate and variable reward system that encourages the user to continuously perform a simple action in anticipation of finding the next post that is entertaining or stimulating, trapping them in a dopamine cycle that is highly addictive. The Ludic Loop is also the primary tactic used by the gambling industry to keep players addicted and funnelling money to the house."
    },
    {
        title: "Autoplay",
        description: "Autoplay is a tactic designed to reduce conscious decision making and increase passive consumption. Automatically playing content encourages the user to continue watching without actively deciding to. This exploits a principle of behavioral psychology called behavioral inertia, or the tendency for people to continue a stimulating activity once it has begun. This is the same reason why addiction counseling, specifically for chemical substances, emphasizes that the first drink or dose is the easiest to say no to. However, once a pleasurable behavior begins, it is difficult to make a conscious decision to stop without external influence. By eliminating the need to click play for each new piece of content, social media platforms make it easier for users to get stuck in the dopamine cycle of consumption for longer than intended."
    },
    {
        title: "Notifications",
        description: "Notifications are engineered to trigger compulsions by exploiting the brain’s reward system. This utilizes a principle of behavioral psychology called intermittent reinforcements, in which unpredictable rewards over a long period of time strengthen habitual behavior. Constant alerts repeatedly draw the user back to the platform to check for updates. Additionally, the appearance of notifications often include bright colors, sounds, text, and symbols that further intensify this response by eliciting a sense of urgency or anticipation."
    },
    {
        title: "Social Validation and FOMO",
        description: "Streaks, likes, shares, and followers are all features designed to manipulate the user’s desire for approval. People are innately motivated by social acceptance, and the platforms capitalize on this by providing statistics and metrics for popularity and engagement. Receiving likes on a post produces a dopamine response, and a lack of engagement alternatively may create feelings of insecurity. Features like streaks additionally pressure users to maintain constant engagement with a platform to avoid losing a symbolic marker of friendship or commitment. The nature of the platforms also perpetuates social trends, conversations, and events that cause users to feel anxiety that they may be missing out, colloquially known as “FOMO,” or the fear of missing out. Additionally, limited time content increases the compulsive need to stay connected and socially informed, as well as impulsive decisions like buying products or services."
    },
    {
        title: "Recommendation Algorithms",
        description: "Personalized content feed is perhaps the most powerful tactic social media uses to maintain engagement. These algorithms track and analyze massive amounts of data from every user action, emotional reaction, watch time, and browsing habits to predict what type of content the user will engage with the longest. Because of the human brain’s need for stimulation, and even traits like morbid curiosity, the content that is being pushed to the user is often over-stimulating, emotionally charged, and even inappropriate or violent. This is done with no regard for perpetuating misinformation or desensitizing users."
    }
  ]

  return (
    <Page title="Dark Patterns">
        <Typography>
          Dark patterns are interface designs that are engineered to manipulate behavioral psychology or otherwise decieve a user. They exploit biases, habits, and emotional responses to influence behavior, often reducing a person's agency to make fully informed decisions and actions. The following are descriptions of various dark patterns that pervade digital platforms in order to influence the user to share data, make purchases, and spend countless hours engaged with the platform.
        </Typography>

        {patterns.map((item) => 
            <TextSection header={item.title}>
                <Typography sx={{pt:2}}>
                    {item.description}
                </Typography>
            </TextSection>
        )}
    </Page>
  )
}

