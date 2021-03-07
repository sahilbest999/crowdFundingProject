import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
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
    Divider,
    Input,
} from 'semantic-ui-react'
import ImageN from 'next/image'
import { nanoid } from 'nanoid'
import style from '../styles/Home.module.css'

const data = [
    {
        price: 0,
        info:
            'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
        inStock: 1,
        maxPrice: 0,
    },
    {
        SegTitle: 'Bamboo Stand',
        price: 25,
        info:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
        inStock: 101,
        maxPrice: 74,
    },
    {
        SegTitle: 'Black Edition Stand',
        price: 75,
        info:
            "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        inStock: 64,
        textColor: 'black',
        maxPrice: 199,
    },
    {
        SegTitle: 'Mahogany Special Stand',
        price: 200,
        info:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        inStock: 0,
        maxPrice: 200,
    },
]

const BackthisProject = ({ setModal, showModal, title }: any) => {
    const radioBtnRef = useRef([])

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

            {data.map(({ SegTitle, price, inStock, info, maxPrice }, i) => {
                return (
                    <Segment
                        disabled={inStock < 1}
                        key={nanoid()}
                        className={style.shadow1}
                        style={{
                            cursor: inStock ? 'pointer' : 'not-allowed',
                            overflowX: 'hidden',
                        }}
                        onClick={() => radioBtnRef.current[i].click()}
                    >
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column width="1">
                                    <input
                                        type="radio"
                                        name="BTPGrp"
                                        disabled={inStock < 1}
                                        color="teal"
                                        className={`ui radio checkbox ${style.radioBtn}`}
                                        ref={(el) => {
                                            radioBtnRef.current[i] = el
                                        }}
                                        style={{ marginBottom: '1rem' }}
                                        onChange={(e) =>
                                            console.log(e.target.checked)
                                        }
                                    />
                                </Grid.Column>
                                <Grid.Column width="15">
                                    <Grid stackable>
                                        <Grid.Row columns={price ? 3 : 1}>
                                            {price ? (
                                                <Grid.Column>
                                                    <Header size="small">
                                                        {SegTitle}
                                                    </Header>
                                                </Grid.Column>
                                            ) : null}

                                            <Grid.Column>
                                                <Header
                                                    size="small"
                                                    color="teal"
                                                >
                                                    {price
                                                        ? `Pledge $${price} or more`
                                                        : 'Pledge with no reward'}
                                                </Header>
                                            </Grid.Column>
                                            {price ? (
                                                <Grid.Column
                                                    floated="right"
                                                    textAlign="right"
                                                    only="tablet computer"
                                                >
                                                    <Header size="small">
                                                        {inStock}
                                                        <span
                                                            style={{
                                                                color:
                                                                    'hsl(0, 0%, 39%)',
                                                                fontSize:
                                                                    '1rem',
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
                            <Grid.Row only="mobile">
                                {price ? (
                                    <Grid.Column>
                                        <Header size="small">
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
                                ) : null}
                            </Grid.Row>
                        </Grid>

                        <div>
                            <div
                                style={{
                                    width: '200%',
                                    left: -200,
                                    transform: 'translateX(-10%)',
                                }}
                            >
                                <Divider />
                            </div>
                            <Grid verticalAlign="middle">
                                <Grid.Row columns={2} only="tablet computer">
                                    <Grid.Column>
                                        <span style={{ color: 'grey' }}>
                                            Enter your Pledge
                                        </span>
                                    </Grid.Column>
                                    <Grid.Column floated="right">
                                        <div
                                            style={{
                                                display: 'flex',
                                                float: 'right',
                                                gap: '1rem',
                                            }}
                                        >
                                            <div className="ui labeled left icon input">
                                                <i className="dollar sign icon" />
                                                <input
                                                    type="number"
                                                    defaultValue={price}
                                                    min={price}
                                                    max={maxPrice}
                                                    disabled={inStock < 1}
                                                    style={{
                                                        borderRadius: 50,
                                                    }}
                                                />
                                            </div>

                                            <Button
                                                circular
                                                color="teal"
                                                disabled={inStock < 1}
                                                onClick={() => setModal(false)}
                                            >
                                                Continue
                                            </Button>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row
                                    columns={1}
                                    only="mobile"
                                    textAlign="center"
                                >
                                    <Grid.Column>
                                        <span style={{ color: 'grey' }}>
                                            Enter your Pledge
                                        </span>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={1} only="mobile" centered>
                                    <Grid.Column>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                gap: '1rem',
                                            }}
                                        >
                                            <div className="ui labeled left icon input">
                                                <i className="dollar sign icon" />
                                                <input
                                                    type="number"
                                                    defaultValue={price}
                                                    min={price}
                                                    max={maxPrice}
                                                    disabled={inStock < 1}
                                                    style={{
                                                        borderRadius: 50,
                                                    }}
                                                />
                                            </div>

                                            <Button
                                                circular
                                                color="teal"
                                                disabled={inStock < 1}
                                                onClick={() => setModal(false)}
                                            >
                                                Continue
                                            </Button>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                    </Segment>
                )
            })}
        </Modal>
    )
}

const PricingSegments = () => {
    return (
        <div className={style.pricingSegments}>
            {data.map(({ SegTitle, price, info, inStock }) =>
                price ? (
                    <Segment disabled={inStock < 1} key={nanoid()}>
                        <Grid verticalAlign="middle" stackable>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Header size="small">{SegTitle}</Header>
                                </Grid.Column>
                                <Grid.Column
                                    textAlign="right"
                                    only="tablet computer"
                                >
                                    <Header size="small" color="teal">
                                        Pledge ${price} or more
                                    </Header>
                                </Grid.Column>

                                <Grid.Column only="mobile">
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
                                <Grid.Column
                                    textAlign="right"
                                    only="tablet computer"
                                >
                                    <Button circular color="teal" size="large">
                                        Select Reward
                                    </Button>
                                </Grid.Column>

                                <Grid.Column only="mobile">
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

// eslint-disable-next-line react/prop-types
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
    const [title] = useState('Mastercraft Bamboo Monitor Riser')

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
