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
    Modal,
    Checkbox,
    Form,
} from 'semantic-ui-react'
import ImageN from 'next/image'
import style from '../styles/Home.module.css'
import { nanoid } from 'nanoid'

const data = [
    {
        price: 0,
        info:
            'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
        inStock: 1,
    },
    {
        SegTitle: 'Bamboo Stand',
        price: 25,
        info:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
        inStock: 101,
    },
    {
        SegTitle: 'Black Edition Stand',
        price: 75,
        info:
            "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        inStock: 64,
        textColor: 'black',
    },
    {
        SegTitle: 'Mahogany Special Stand',
        price: 200,
        info:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        inStock: 0,
    },
]

const BackthisProject = ({ setModal, showModal, title }: any) => {
    return (
        <Modal
            closeIcon
            open={showModal}
            onClose={() => setModal(false)}
            style={{ padding: '2rem 2rem 2rem 2rem' }}
        >
            <Modal.Header>
                <Header>
                    Back this project
                    <Header.Subheader>
                        <br />
                        Want to support us bringing {title} out in the world?
                    </Header.Subheader>
                </Header>
            </Modal.Header>
            {data.map(({ SegTitle, price, inStock, info }) => (
                <Segment disabled={inStock < 1} key={nanoid()} secondary>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width="1">
                                <Checkbox
                                    name="BTPGrp"
                                    disabled={inStock < 1}
                                    radio
                                />
                            </Grid.Column>
                            <Grid.Column width="15">
                                <Grid>
                                    <Grid.Row columns={price ? 3 : 1}>
                                        {price ? (
                                            <Grid.Column>
                                                <Header size="small">
                                                    {SegTitle}
                                                </Header>
                                            </Grid.Column>
                                        ) : null}

                                        <Grid.Column>
                                            <Header size="small" color="teal">
                                                {price
                                                    ? `Pledge $${price} or more`
                                                    : 'Pledge with no reward'}
                                            </Header>
                                        </Grid.Column>
                                        {price ? (
                                            <Grid.Column textAlign="right">
                                                <Header size="small">
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
                                        ) : null}
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <p style={{ color: 'grey' }}>
                                                {info}
                                            </p>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            ))}
        </Modal>
    )
}

const PricingSegments = () => {
    return (
        <div className={style.pricingSegments}>
            {data.map(({ SegTitle, price, info, inStock }) =>
                price ? (
                    <Segment disabled={inStock < 1} key={nanoid()}>
                        <Grid verticalAlign="middle">
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Header size="small">{SegTitle}</Header>
                                </Grid.Column>
                                <Grid.Column textAlign="right">
                                    <Header size="small" color="teal">
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
                                                color: 'hsl(0, 0%, 39%)',
                                                fontSize: '1rem',
                                            }}
                                        >
                                            {' '}
                                            left
                                        </span>
                                    </Header>
                                </Grid.Column>
                                <Grid.Column textAlign="right">
                                    <Button circular color="teal" size="large">
                                        Select Reward
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                ) : null
            )}
        </div>
    )
}

const AboutUs = () => {
    return (
        <div className={style.aboutUs}>
            <Header textAlign="left" style={{ marginBottom: '1.8rem' }}>
                About this project
            </Header>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
            </p>

            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.Lorem Ipsum is good.
            </p>
        </div>
    )
}

const ProjectProgress = () => {
    return (
        <div className={style.infoDiv}>
            <Grid stackable divided textAlign="center">
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
                            <Header.Subheader>total backers</Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header size="large">
                            56 <Header.Subheader>days left</Header.Subheader>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Progress percent={10} size="small" color="green" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

const MainBtns = ({ title }) => {
    const [isBookmarked, setBookmark] = useState(false)
    const [showBTPModal, setBTPModal] = useState(false)

    return (
        <>
            <div className={style.MainBtns}>
                <div>
                    <Button
                        circular
                        color="teal"
                        onClick={() => setBTPModal(true)}
                    >
                        Back this project
                    </Button>
                </div>
                <div>
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
                        <div style={{ whiteSpace: 'nowrap' }}>
                            <Icon
                                circular
                                name="bookmark"
                                color={isBookmarked ? 'teal' : 'grey'}
                                inverted
                                size="large"
                            />
                            <span style={{ paddingLeft: '0.5rem' }}>
                                {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                            </span>
                        </div>
                    </Button>
                </div>
            </div>
            <BackthisProject
                setModal={setBTPModal}
                showModal={showBTPModal}
                title={title}
            />
        </>
    )
}

const Headings = ({ title }: any) => {
    return (
        <>
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
                        <br />A beautiful & handcrafted monitor stand to reduce
                        neck and eye strain.
                    </Header.Subheader>
                </Header>
            </div>
        </>
    )
}

export default function Home() {
    const [title, setTitle] = useState('Mastercraft Bamboo Monitor Riser')

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
                        borderRadius: 10,
                        padding: '0 2rem 2rem 2rem',
                    }}
                >
                    <Headings title={title} />
                    <MainBtns title={title} />
                    <ProjectProgress />
                    <AboutUs />
                    <PricingSegments />
                </Container>
            </main>
        </>
    )
}
