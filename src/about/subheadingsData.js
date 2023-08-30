import { Link } from 'react-router-dom'; 
const linkStyle = {
    color: 'lightBlue',
    textDecoration: 'none',
  };

const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '40%',
    paddingBottom: '10px'
  };

const subheadingsData = {
    1: [
        {
            title: "About Me",
            content: (
                <>
                    <p>
                    Hello, everyone! Welcome to trash bin in a corner of the internet! 🌟
                    </p>
                    <p>
                    I'm egg, and I'm not a fucking Furry. 🦊
                    </p>
                    <p>
                    I'm 25 and dying inside. Shit on me as my mental health suffers on various platforms like Twitch, TikTok, YouTube, and more! 🎉
                    </p>
                    <p>
                    So, come along on this thrilling ride with me! Thank you for being part of this wonderful community.
                    </p>
                </>
            )
        }
    ],
    2: [
        {
            title: "Twitch",
            content: (
                <>
                    <p>
                        Come watch me live on my Twitch. I'm often talking to chat while Cosplaying, reacting to content, or gaming. Come say hi!
                    </p>
                    <p>
                    And if you enjoy my content, Can can can I have one Prime please? One. Fucking Prime please. Can I one one fucking. Fuck. fucking Prime?
                    </p>
                    <div style={linkContainerStyle}>
                        <Link to="https://www.twitch.tv/emiru" style={linkStyle}>https://www.twitch.tv/emiru</Link>
                    </div>
                </>
            )
        },
        {
            title: "YouTube",
            content: (
                <>
                    <p>
                        My YouTube you can go to see all the highlights from my Twitch stream. I post new content almost daily!
                    </p>
                    <p>
                    Just make sure you subcribe because 60% of you are not subscribed.
                    </p>
                    <div style={linkContainerStyle}>
                        <Link to="https://www.youtube.com/channel/UCZprw7Bxzfh2IysXNnl1S3g" style={linkStyle}>https://www.youtube.com/emiru</Link>
                    </div>
                </>
            )
        },
        {
            title: "TikTok",
            content: (
                <>
                    <p>
                        My TikTok is a seperate Emi. It's not me. Go check it out though.
                    </p>
                    <div style={linkContainerStyle}>
                        <Link to="https://www.tiktok.com/@emiru?lang=en" style={linkStyle}>https://www.tiktok.com/emiru</Link>
                    </div>
                </>
            )
        }
    ],
    3: [
        {
            title: "Kirby Pile",
            content: (
                <>
                    <p>
                        My Kirby collection is a symbol of my growing hoarding addiction. The Kirby pile currently consists of 105 Kirbys and is almost entirely gifts from you guys!
                    </p>
                </>
            )
        },
        {
            title: "Add to the Pile",
            content: (
                <>
                    <p>
                        If you want me to have more Kirbys and see your own Kirby in the collection, send a Kirby to my PO Box. I'll open it and add it to the pile on stream!
                    </p>
                    <p>
  My PO BOX:<br />
  500 E Whitestone Blvd #3309<br />
  Cedar Park TX 78613-9998
</p>
                </>
            )
        }
    ],
}

export default subheadingsData