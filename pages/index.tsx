import Head from 'next/head'
import { useState } from 'react'
import {
    Container,
    Image,
    Grid,
    Header,
    Button,
    Icon,
    Progress,
    Segment,
} from 'semantic-ui-react'
import ImageN from 'next/image'
import style from '../styles/Home.module.css'

const data = [
    {
        SegTitle: 'Bamboo Stand',
        price: 25,
        info:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        inStock: 101,
    },
    {
        SegTitle: 'Black Edition Stand',
        price: 75,
        info:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        inStock: 64,
    },
    {
        SegTitle: 'Mahogany Special Stand',
        price: 200,
        info:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        inStock: 0,
    },
]

export default function Home() {
    const [title, setTitle] = useState('Mastercraft Bamboo Monitor Riser')
    const [isBookmarked, setBookmark] = useState(false)
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <div style={{ zIndex: -1 }}>
                    <ImageN
                        src="/images/image-hero-desktop.jpg"
                        alt="background-image"
                        objectPosition="top"
                        objectFit="cover"
                        width="100%"
                        height="30%"
                        layout="responsive"
                    />
                </div>
                <Container
                    style={{
                        background: 'white',
                        position: 'relative',
                        top: -20,
                        zIndex: 213,
                        borderRadius: 10,
                        padding: '2rem',
                    }}
                >
                    <div
                        style={{
                            transform: 'translateY(-50%)',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            src="/images/logo-mastercraft.svg"
                            size="mini"
                            circular
                        />
                    </div>
                    <div>
                        <Header textAlign="center" size="large">
                            {title}

                            <Header.Subheader>
                                <br />A beautiful & handcrafted monitor stand to
                                reduce neck and eye strain.
                            </Header.Subheader>
                        </Header>
                    </div>

                    <div className={style.MainBtns}>
                        <Button circular color="teal">
                            Back this project
                        </Button>

                        <Button
                            circular
                            style={{
                                padding: '0 20px 0 0',
                            }}
                            className=".btnHoverColor"
                            onClick={() => {
                                setBookmark(!isBookmarked)
                            }}
                        >
                            <div>
                                <Icon
                                    circular
                                    name="bookmark"
                                    color="teal"
                                    inverted
                                    size="large"
                                />
                                <span>
                                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                                </span>
                            </div>
                        </Button>
                    </div>

                    <div className={style.infoDiv}>
                        <Grid divided textAlign="center">
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <Header size="large">
                                        $89,914
                                        <Header.Subheader>
                                            of $100,000 backed
                                        </Header.Subheader>
                                    </Header>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header size="large">
                                        5,007{' '}
                                        <Header.Subheader>
                                            total backers
                                        </Header.Subheader>
                                    </Header>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header size="large">
                                        56{' '}
                                        <Header.Subheader>
                                            days left
                                        </Header.Subheader>
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={1}>
                                <Grid.Column>
                                    <Progress
                                        percent={10}
                                        size="small"
                                        color="green"
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>

                    <div className={style.aboutUs}>
                        <Header
                            textAlign="left"
                            style={{ marginBottom: '1.8rem' }}
                        >
                            About this project
                        </Header>

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting.
                        </p>

                        <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old.Lorem Ipsum is good.
                        </p>
                    </div>

                    <div className={style.pricingSegments}>
                        <Segment.Group>
                            {data.map(({ SegTitle, price, info, inStock }) => (
                                <Segment disabled={inStock < 1}>
                                    <Grid verticalAlign="middle">
                                        <Grid.Row columns={2}>
                                            <Grid.Column>
                                                <Header size="small">
                                                    {SegTitle}
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column textAlign="right">
                                                <Header
                                                    size="small"
                                                    color="teal"
                                                >
                                                    Pledge ${price} or more
                                                </Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>{info}</Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row columns={2}>
                                            <Grid.Column>
                                                <Header size="large">
                                                    {inStock}
                                                    <span
                                                        style={{
                                                            color:
                                                                'hsl(0, 0%, 39%)',
                                                            fontSize: '1rem',
                                                        }}
                                                    >
                                                        {' '}
                                                        left
                                                    </span>
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column textAlign="right">
                                                <Button
                                                    circular
                                                    color="teal"
                                                    size="large"
                                                >
                                                    Select Reward
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            ))}
                        </Segment.Group>
                    </div>
                    <div style={{ width: 300, height: 300 }}></div>
                </Container>
            </main>
        </>
    )
}
