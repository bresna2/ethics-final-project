
import { Typography } from '@mui/material';
import {Page,TextSection} from '../components';


export default function HelpPage() {


  return (
    <Page title="Get Help">
        <TextSection header="You Are Not Alone" underline removePadding>
          <Typography sx={{pt:3}}>An estimated 210 million people around the globe are clinically addicted to Social Media. Many others have suffered side effects from excessive technology usage or have seen family members and friends fall into addiction. THERE IS HOPE. The first step is to recognize the signs of addiction, then take the action to mitigate screen usage. This is no easy task, but with the help from numerous communities and support networks, you too can free yourself or your loved ones from screens. </Typography>
        </TextSection>

        <TextSection header="Therapeutic and Professional Support">
          <Typography sx={{pl:2,pt:3}}>{"- SAMHSA National Helpline: 1-800-662-HELP (4357) for treatment referrals for behavioral health issues."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <a aria-label="link to National Alliance on Mental Illness website" href="https://www.nami.org/">NAMI</a> {" (National Alliance on Mental Illness): 1-800-950-NAMI (6264) for support and information."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- Therapy Types: Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT) are effective for addressing underlying causes of addiction."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <a aria-label="link to Addiction center for social media addiction website" href="https://www.addictioncenter.com/behavioral-addictions/social-media-addiction/treatment/">AddictionCenter:</a>{" Provides information on recognizing symptoms and finding professional help."}</Typography>
        </TextSection>

        <TextSection header="Digital Tools for Limiting Screentime">
          <Typography sx={{pl:2,pt:3}}>{"- "} <b>Freedom:</b> {" Blocks specific apps and websites across devices."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <b>AppBlock:</b> {" Locks apps to curb compulsive checking."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <b>StayFocused:</b> {" A Chrome extension to limit time on time-wasting websites."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <b>RescueTime:</b> {" Tracks digital habits and provides reports."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <b>Built-in Tools:</b> {" Utilize iOS/Android 'Screen Time' or 'Digital Wellbeing' features to set daily limits."}</Typography>
        </TextSection>

        <TextSection header="Self-Help Strategies">
          <Typography sx={{pl:2,pt:3}}>{"- "} <b>Social Media Victims Law Center:</b> {" Offers a Social Media Addiction Questionnaire to assess risks."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <b>Digital Detox:</b> {" Taking planned breaks from all social media platforms."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <b>Adjusting Phone Settings:</b> {" Changing phone display to grayscale to make apps less appealing."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <b>Creating Boundaries:</b> {" Charging devices outside the bedroom and turning off notifications."}</Typography>
        </TextSection>

        <TextSection header="Resources for Parents">
          <Typography sx={{pl:2,pt:3}}>{"- "} <b>MAMA (Mothers Against Media Addiction):</b> {" A grassroots movement focused on protecting children from addictive technology."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <b>Parents Together:</b> {" Provides resources on navigating screen time."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- "} <b>Children and Screens:</b> {" Institute on media and Child Health."}</Typography>
          <Typography sx={{pl:2,pt:2}}>{"- Set boundries with a "} <a aria-label="link to Family media plan website" href="https://www.aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/qa-portal/qa-portal-library/qa-portal-library-questions/problematic-media-use-strategies-and-interventions/">Family Media Plan</a></Typography>
        </TextSection>

    </Page>
  )
}
