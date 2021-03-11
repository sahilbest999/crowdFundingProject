import Head from 'next/head'
import React, { useRef, useState } from 'react'
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
    Form,
    Menu,
} from 'semantic-ui-react'
// import ImageN from 'next/image'
import { nanoid } from 'nanoid'
// import { slide as RB_Menu } from 'react-burger-menu'
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

const PurchaseModal = ({ showModal, setModal, title }: any) => {
    return (
        <Modal open={showModal} onClose={() => setModal(false)}>
            <div style={{ padding: '2rem' }}>
                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Icon
                                    name="check circle"
                                    size="huge"
                                    color="teal"
                                />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header size="large" textAlign="center">
                                Thanks for your Support!
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <p style={{ color: 'grey', textAlign: 'center' }}>
                                Your pledge brings us one step closer to sharing
                                {title} worldwide. You will get an email once
                                our campaign is completed.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    onClick={() => setModal(false)}
                                    size="large"
                                    circular
                                    color="teal"
                                >
                                    Got it!
                                </Button>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Modal>
    )
}

const BackthisProject = ({
    setModal,
    showModal,
    title,
    setPurchaseModal,
}: any) => {
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
            <Form
                name="BTPGrp"
                onSubmit={() => {
                    setModal(false)
                    setPurchaseModal(true)
                    return false
                }}
            >
                {data.map(({ SegTitle, price, inStock, info, maxPrice }, i) => {
                    const radioBtnRef = useRef(null)
                    const [showMain, setMain] = useState(false)

                    return (
                        <Segment
                            disabled={inStock < 1}
                            key={nanoid()}
                            className={style.shadow1}
                            style={{
                                cursor: inStock ? 'pointer' : 'not-allowed',
                                overflowX: 'hidden',
                            }}
                            onClick={() => {
                                radioBtnRef.current?.click()
                            }}
                            onFocus={() => console.log('focused Segment')}
                            onBlur={() => console.log('deselect Segment')}
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
                                            style={{ marginBottom: '1rem' }}
                                            ref={radioBtnRef}
                                            onFocus={() =>
                                                console.log('focused Segment')
                                            }
                                            onBlur={() =>
                                                console.log('deselect Segment')
                                            }
                                        />
                                    </Grid.Column>
                                    <Grid.Column width="15">
                                        <Grid stackable>
                                            <Grid.Row columns={price ? 3 : 1}>
                                                {price ? (
                                                    <Grid.Column>
                                                        <Header size="small">
                                                            <span
                                                                className={
                                                                    style.titlePricing
                                                                }
                                                            >
                                                                {SegTitle}
                                                            </span>
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
                                                    <p
                                                        style={{
                                                            color: 'grey',
                                                        }}
                                                    >
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
                            </Grid>

                            {showMain && (
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
                                        <Grid.Row
                                            columns={2}
                                            only="tablet computer"
                                        >
                                            <Grid.Column>
                                                <span
                                                    style={{
                                                        color: 'grey',
                                                    }}
                                                >
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
                                                            disabled={
                                                                inStock < 1
                                                            }
                                                            style={{
                                                                borderRadius: 50,
                                                            }}
                                                            required={
                                                                inStock > 1
                                                            }
                                                        />
                                                    </div>

                                                    <Button
                                                        circular
                                                        color="teal"
                                                        disabled={inStock < 1}
                                                        type="submit"
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
                                                <span
                                                    style={{
                                                        color: 'grey',
                                                    }}
                                                >
                                                    Enter your Pledge
                                                </span>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row
                                            columns={1}
                                            only="mobile"
                                            centered
                                        >
                                            <Grid.Column>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent:
                                                            'center',
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
                                                            disabled={
                                                                inStock < 1
                                                            }
                                                            style={{
                                                                borderRadius: 50,
                                                            }}
                                                        />
                                                    </div>

                                                    <Button
                                                        circular
                                                        color="teal"
                                                        disabled={inStock < 1}
                                                        type="submit"
                                                    >
                                                        Continue
                                                    </Button>
                                                </div>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
                            )}
                        </Segment>
                    )
                })}
            </Form>
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
                                    <Header size="small">
                                        <span className={style.titlePricing}>
                                            {SegTitle}
                                        </span>
                                    </Header>
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
    const [showPurchaseModal, setPurchaseModal] = useState(false)

    return (
        <>
            <Grid centered columns={2} style={{ marginTop: '1rem' }}>
                <Grid.Column>
                    <div className={style.center}>
                        <Button
                            circular
                            color="teal"
                            onClick={() => setBTPModal(true)}
                        >
                            Back this project
                        </Button>
                    </div>
                </Grid.Column>
                <Grid.Column only="computer">
                    <div className={style.center}>
                        <Button
                            circular
                            onClick={() => setBookmark(!isBookmarked)}
                            style={{ padding: 0 }}
                        >
                            <div style={{ whiteSpace: 'nowrap' }}>
                                <Icon
                                    circular
                                    name="bookmark"
                                    color={isBookmarked ? 'teal' : 'grey'}
                                    inverted
                                    size="large"
                                />
                                <span
                                    style={{
                                        paddingLeft: '0.5rem',
                                        paddingRight: '1rem',
                                    }}
                                >
                                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                                </span>
                            </div>
                        </Button>
                    </div>
                </Grid.Column>

                <Grid.Column only="tablet mobile">
                    <div className={style.center}>
                        <Button
                            circular
                            icon="bookmark"
                            className=".btnHoverColor"
                            onClick={() => {
                                setBookmark(!isBookmarked)
                            }}
                            size="large"
                            color={isBookmarked ? 'teal' : 'grey'}
                        />
                    </div>
                </Grid.Column>
            </Grid>
            {/* <div className={style.MainBtns}>
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
            </div> */}
            <BackthisProject
                setModal={setBTPModal}
                showModal={showBTPModal}
                title={title}
                setPurchaseModal={setPurchaseModal}
            />
            <PurchaseModal
                setModal={setPurchaseModal}
                showModal={showPurchaseModal}
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

const HamburgerMenuBtn = ({ showMenu, setshowMenu }) => {
    const styles = {
        container: {
            height: '32px',
            width: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        },
        line: {
            height: '2px',
            width: '20px',
            background: 'white',
            transition: 'all 0.2s ease',
        },
        lineTop: {
            transform: showMenu ? 'rotate(45deg)' : 'none',
            transformOrigin: 'top left',
            marginBottom: '5px',
        },
        lineMiddle: {
            opacity: showMenu ? 0 : 1,
            transform: showMenu ? 'translateX(100%)' : 'none',
        },
        lineBottom: {
            transform: showMenu ? 'translateX(-1px) rotate(-45deg)' : 'none',
            transformOrigin: 'top left',
            marginTop: '5px',
        },
    }
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            style={styles.container}
            onClick={() => setshowMenu(!showMenu)}
            onKeyPress={() => setshowMenu(!showMenu)}
        >
            <div style={{ ...styles.line, ...styles.lineTop }} />
            <div style={{ ...styles.line, ...styles.lineMiddle }} />
            <div style={{ ...styles.line, ...styles.lineBottom }} />
        </div>
    )
}

const NavBar = () => {
    const [showMenu, setshowMenu] = useState(false)
    const menuItems = [
        ['About', '/about'],
        ['Discover', '/discover'],
        ['Get Started', '/getStarted'],
    ]
    return (
        <div
            style={{
                color: 'white',
                position: 'absolute',
                zIndex: 2,
                width: '100%',
                padding: '3rem',
            }}
            className={style.NavBar}
        >
            <Grid columns={2} verticalAlign="middle">
                <Grid.Column>
                    <a href="/">
                        <Image src="/images/logo.svg" />
                    </a>
                </Grid.Column>
                <Grid.Column only="computer">
                    <Menu secondary floated="right">
                        {menuItems.map(([ItemName, ItemLink]) => (
                            <Menu.Item fitted>
                                <a href={ItemLink} className={style.NavItem}>
                                    {ItemName}
                                </a>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Grid.Column>
                <Grid.Column only="mobile tablet">
                    <Menu secondary>
                        <Menu secondary floated="right">
                            <Menu.Item fitted>
                                <HamburgerMenuBtn
                                    {...{ showMenu, setshowMenu }}
                                />
                            </Menu.Item>
                        </Menu>
                    </Menu>
                </Grid.Column>
                <Grid.Row columns={1} only="mobile tablet">
                    <Grid.Column>
                        <div
                            style={{
                                transition: 'all 0.2s ease',
                                opacity: showMenu ? 1 : 0,
                                transform: showMenu
                                    ? 'translateY(0)'
                                    : 'translateY(-200%)',
                            }}
                        >
                            <Menu
                                vertical
                                fluid
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                {menuItems.map(([ItemName, ItemLink]) => {
                                    return (
                                        <Menu.Item>
                                            <a
                                                href={ItemLink}
                                                style={{ fontWeight: 'bolder' }}
                                            >
                                                {ItemName}
                                            </a>
                                        </Menu.Item>
                                    )
                                })}
                            </Menu>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default function Home() {
    const [title] = useState('Mastercraft Bamboo Monitor Riser')

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar />
            <main>
                <div
                    style={{
                        zIndex: -1,
                    }}
                    className={style.bgImg}
                >
                    {/* <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            zIndex: 1,
                            boxShadow:
                                'inset 0px 200px 126px -189px rgba(0,0,0,1)',
                        }}
                    /> */}
                    {/* <ImageN
                        src="/images/image-hero-desktop.jpg"
                        alt="background-image"
                        objectPosition="top"
                        objectFit="cover"
                        width="100%"
                        height="30%"
                        layout="responsive"
                    /> */}
                    <div className={style.bgImg} />
                </div>
                <Container
                    style={{
                        background: 'white',
                        position: 'relative',
                        top: -70,
                        borderRadius: 10,
                        padding: '0 2rem 2rem 2rem',
                        zIndex: 1,
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
