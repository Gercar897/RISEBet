import Head from 'next/head'
import styled from 'styled-components'

const Hero = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backgrounds: #fff;
`;

const Heading = styled.h1`
  color #05DBF2;
  font-size: 7rem;
  font-weight: 900;
`;

export default function responsible() {
  return (
    <>
      
      <Head>
        <title>Responsible Gaming</title>
        <link rel="icon" href="/Riseicon2.ico" />
      </Head>

      <div>
      <section class="text-gray-700 min-h-screen backdrop-blur">
        <div class="container px-5 py-24 mx-auto ">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-4xl font-medium text-center title-font text-secondary mb-4">
              RESPONSIBLE GAMING
            </h1>
            <p class="text-base text-primary text-3x1 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you. At RISE, we’re fully committed to the promotion of responsible gaming, the protection of minors and the socially vulnerable and ensuring our activities are conducted in a fair and open way.
We believe that gambling is a fun form of entertainment that should not negatively impact our customers’ lives.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold text-texty rounded-md py-2 px-4">
                SETTING YOUR OWN LIMITS
                </summary>

                <span class="text-sm text-white">
                If you have an account with us, you can control and manage your own gambling activity as follows:

-Deposit limits allow you to limit the amount of money you can deposit into your account on either a daily, weekly or monthly basis.

-Wagering limits allow you to decide a maximum bet value on either Sportsbook or Casino products; and/or

-Maximum bet limits allow you to decide an aggregate daily bet limit on either Sports or Casino products.

-Session limits allow you to decide the maximum duration of your login session. After the chosen time, you will be automatically logged out.

To set and manage your limits, click on the "Limits” button within your Profile.

*Please note that you will be able to increase your limits only after seven days from your first request
                </span>

              </details>
              <details class="mb-4">
                <summary class="font-semibold text-texty bg-gray-200 rounded-md py-2 px-4">
                  SELF-EXCLUSION
                </summary>

                <span class="text-white text-sm">
                If you consider the need to take a longer break from gambling, there are two options of Self-Exclusion you can take, a definite time period (set time span) or an indefinite time period (no set time span).

You can choose to set either a definite or indefinite time period in your Player Profile under the tab “Limits”. Our Self-Exclusion facility allows you to prevent yourself from accessing your account for periods of 1 month up to a maximum period of 3 years, or indefinitely.

If requesting via email or live chat to close your account, you will also be asked to confirm whether you are requesting a period of Self-Exclusion.

If you self-exclude, we can only reduce your Self-Exclusion period if we receive notice from you that you wish to do so. If you self-exclude for definite period of time, and wish to reduce this period, this will be effective only after twenty-four (24) hours from the time that we receive the notice.

If you self-exclude for indefinite period of time, and wish to reduce this period, this will be effective only after one week (7 days) from the day on which Vie.bet receives the notice.

If you have a definite self-exclusion with Vie.bet, you will be able to increase this at any time by contacting us via live chat or email.

*If you have any withdrawable real money funds in your account, you will need to contact us to make sure your funds are returned, via email or live chat.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold text-texty bg-gray-200 rounded-md py-2 px-4">
                  REALITY CHECKS
                </summary>

                <span class="text-sm text-white">
                If you have an account with us, you can control and manage the amount of time you can spend on the site in any single session.

To manage your session times, click on the “Personal Details” button within your Account page. From here, you can set the maximum number of minutes you are willing to spend in any single session.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold text-texty  bg-gray-200 rounded-md py-2 px-4">
                  WHAT IS RESPONSIBLE GAMING
                </summary>

                <span class="px-4 py-2 text-white text-sm">
                  
                Responsible gaming means staying in control of how much time and money we spend gambling and treating the activity as just one form of entertainment in a balanced lifestyle. Just like with other forms of entertainment, gambling is a form of expenditure, and responsible gaming means not spending more money or time than we can reasonably afford, keeping in mind all our other responsibilities in life.

Following these simple tips can help make sure your gambling doesn't become a problem.
Don't think of gambling as a way to make money, Only gamble with money you can afford to lose, Set a money and time limit in advance
Never chase your losses, Don't gamble when you're depressed or upset, Balance gambling with other activities, Take frequent breaks, Don't drink or use drugs when gambling

                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold text-texty bg-gray-200 rounded-md py-2 px-4">
                  TIME OUT
                </summary>

                <span class="px-4 py-2 text-white text-sm">
                You are able to take a short break from gambling with Vie. You can select either a 1 day, 1 week or 1 month time-out in your “Limits” section of your Player Profile.

Once your request for a time-out has been activated, your account will be blocked and you will not be able to play on our website or deposit into your account for the duration of the time-out period. Your account will automatically be re-instated after the time-out period has expired.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold text-texty bg-gray-200 rounded-md py-2 px-4">
                  PROTECTING MINORS
                </summary>

                <span class="px-4 py-2 text-white text-sm">
                At RISE we are committed to preventing access to our gambling activities by persons who have not yet reached the age of 18. We carry out age verification checks on all our customers.

We aim to ensure that our marketing materials do not not exploit, appeal to, target or feature children or young persons and that the products and services that we offer do not portray or feature content that may reflect or appeal to children or young persons.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
      
    </>
  )
}