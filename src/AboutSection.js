import React, { useState, useEffect } from 'react';
import { Grid, Typography, CardContent, CardMedia } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import SchoolIcon from '@mui/icons-material/School';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import './AboutSection.css';

const AboutSection = () => {
    const sectionStyle = {
        background: 'transparent',
        padding: '5em',
        fontFamily: 'Montserrat',
        color: 'black',
        textAlign: 'center',
        marginTop: '90px',
    };

    const benefitStyle = {
        marginBottom: '20px',
    };

    const iconStyle = {
        fontSize: '58px',
        marginTop: '5px',
        color: '#D0DDFC',
    };

    const titleStyle = {
        fontFamily: 'Montserrat',
        marginBottom: '10px',
        fontSize: '25px',
        fontWeight: 'bold',
    };

    const descriptionStyle = {
        fontFamily: 'Montserrat',
        textAlign: 'center',
        color: '#D5D3E1',
    };

    const AnimatedCard = ({ style, children }) => {
        const [hovered, setHovered] = useState(false);

        const springProps = useSpring({
            opacity: hovered ? 1 : 0.8,
            transform: `scale(${hovered ? 1.1 : 1})`,
            config: { duration: 200 },
        });

        return (
            <animated.div
                style={{ ...style, ...springProps }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {children}
            </animated.div>
        );
    };

    const cardStyle = {
        marginTop: '20px',
        background: 'linear-gradient(to right, #3A1789, #25158C)',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        minHeight: '180px',
        borderRadius: '15px',
        border: '1px solid #7165C4',
        marginBottom: '50px',
        position: 'relative', // Agregar posición relativa para que los bordes absolutos se posicionen correctamente
        overflow: 'hidden', // Ocultar cualquier parte del borde que se extienda más allá del contenedor
        boxShadow: '0 4px 8px #150F3A', // Sombra para el borde neon
    };


    const userSectionStyle = {
        marginTop: '50px',
    };

    const joinSectionStyle = {
        marginTop: '100px',
        background: 'linear-gradient(to right, #17112C, #020D29)',
        color: 'black',
        padding: '2em',
        borderRadius: '15px',
        width: '70%',
        boxSizing: 'border-box',
        display: 'flex',
        boxShadow: '0 40px 120px #120B29, 0 -40px 120px #0D021B', // Dos sombras, una arriba y otra abajo
        border: '1px solid #7162D5',
        transition: 'box-shadow 0.3s ease-in-out',
    };

    const Counter = ({ value }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let interval;

            if (value > 0) {
                const step = Math.ceil(value / 50);

                interval = setInterval(() => {
                    setCount((prevCount) => Math.min(prevCount + step, value));
                }, 20);
            }

            return () => clearInterval(interval);
        }, [value]);

        const counterTextStyle = {
            fontSize: '3em',
            fontWeight: 'bold',
            background: '#8AA3F2',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
        };

        return (
            <div style={counterTextStyle}>
                {count >= 260 ? '260+' : count}
            </div>
        );
    };


    const [userCount, setUserCount] = useState(50);

    const [userSectionRef, inView] = useInView();

    useEffect(() => {
        if (inView) {
            setUserCount(260);
        }
    }, [inView]);


    return (
        <div style={sectionStyle}>
            <Typography variant="h4" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '17px', marginBottom: '15px', fontWeight: 'bold', color: '#9651FF' }}>
                Para nuestros usuarios
            </Typography>

            <Typography variant="h4" style={{ color: '#CECCD1', fontFamily: 'Montserrat, sans-serif', marginBottom: '20px', fontWeight: 'bold', fontSize: '40px' }}>
                Beneficios de{' '}
                <span style={{
                    background: 'linear-gradient(to right, #3A1789, #8028CA)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}>
                    UniConnect
                </span>
                , ¡descúbrelos!
            </Typography>

            <Grid container spacing={4}>
                {[{
                    icon: <EmojiEventsIcon style={iconStyle} />,
                    title: 'Eventos Exclusivos',
                    description: 'Lorem ipsum',
                },
                {
                    icon: <PeopleIcon style={iconStyle} />,
                    title: 'Conéctate con Docentes y Estudiantes',
                    description: 'Lorem ipsum',
                },
                {
                    icon: <ChatIcon style={iconStyle} />,
                    title: 'Comunicación Directa',
                    description: 'Lorem ipsum',
                },
                {
                    icon: <SchoolIcon style={iconStyle} />,
                    title: 'Sesiones de Aulas en tiempo real',
                    description: 'Lorem Ipsum',
                },
                ].map((benefit, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index} style={benefitStyle}>
                        <AnimatedCard style={cardStyle}>
                            <CardMedia component="div">{benefit.icon}</CardMedia>
                            <CardContent>
                                <Typography variant="h6" style={titleStyle}>
                                    {benefit.title}
                                </Typography>
                                <Typography style={descriptionStyle}>{benefit.description}</Typography>
                            </CardContent>
                        </AnimatedCard>
                    </Grid>
                ))}
            </Grid>

            <div ref={userSectionRef} style={userSectionStyle}>
                <Typography variant="h4" style={{ fontFamily: 'Montserrat, sans-serif', marginBottom: '10px', fontWeight: 'bold', color: '#CECCD1', fontSize: '40px' }}>
                    Únete, ya somos <Counter value={userCount} />
                </Typography>
                <div style={{ maxWidth: '650px', margin: 'auto' }}>
                    <Typography variant="h4" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', marginRight: '10px', fontWeight: 'bold', color: '#CD92FF' }}>
                        Descubra cómo UniConnect ha sido un socio fundamental en nuestros éxitos académicos, proporcionando oportunidades que han influido en nuestros futuros profesionales.
                    </Typography>
                </div>
            </div>

            {/* SOBRE UNIVERSIDADES */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'left' }}>

                {/* Sección UNISON */}
                <div style={{ ...joinSectionStyle, display: 'flex', width: '85%', marginBottom: '50px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1, marginRight: '20px' }}>
                            <Typography variant="h4" style={{ color: '#C1BAD7', fontFamily: 'Montserrat, sans-serif', marginBottom: '20px', fontWeight: 'bold' }}>
                                Sobre la <span style={{
                                    backgroundImage: `linear-gradient(35deg, #FB9121, #3A21F0)`,
                                    WebkitTextFillColor: 'transparent',
                                    WebkitBackgroundClip: 'text',
                                }}>Universidad de Sonora</span>...
                            </Typography>
                            <List>
                                <ListItem style={{ display: 'flex', alignItems: 'flex-start', }}>
                                    <ListItemIcon>
                                        <EmojiEventsIcon style={{ color: '#6535C1', fontSize: '50px' }} />
                                    </ListItemIcon>
                                    <div style={{ marginLeft: '10px' }}>
                                        <ListItemText
                                            primary={<Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>Participa en Eventos Exclusivos</Typography>}
                                            secondary={<Typography variant="body2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                Amplía tus horizontes académicos y profesionales mediante eventos exclusivos organizados por UniConnect.
                                            </Typography>}
                                        />
                                    </div>
                                </ListItem>
                                <ListItem style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <ListItemIcon>
                                        <PeopleIcon style={{ color: '#6535C1', fontSize: '50px' }} />
                                    </ListItemIcon>
                                    <div style={{ marginLeft: '10px' }}>
                                        <ListItemText
                                            primary={<Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>Establece Conexiones Profundas</Typography>}
                                            secondary={<Typography variant="body2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                Conecta con docentes y estudiantes, formando relaciones significativas que enriquecerán tu experiencia académica.
                                            </Typography>}
                                        />
                                    </div>
                                </ListItem>
                                {/* Agrega más íconos y puntos importantes según sea necesario */}
                            </List>
                            <Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget.
                            </Typography>

                        </div>
                        {/* Columna Derecha con la Imagen Vertical */}
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <img
                                src="https://www.elsoldehermosillo.com.mx/local/rm5fyo-unison9/ALTERNATES/LANDSCAPE_1140/Unison9"
                                alt="Descripción de la imagen"
                                style={{
                                    width: '400px',
                                    height: '300px',
                                    borderRadius: '10px',
                                    opacity: 0.8,
                                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Sección ITH */}
                <div style={{ ...joinSectionStyle, display: 'flex', width: '85%', marginTop: '30px' }}>
                    <div style={{ display: 'flex' }}>
                        {/* Columna Izquierda con Puntos Importantes e Iconos */}
                        <div style={{ flex: 1, marginRight: '20px' }}>
                            <Typography variant="h4" style={{ color: '#C1BAD7', fontFamily: 'Montserrat, sans-serif', marginBottom: '15px', fontWeight: 'bold' }}>
                                Sobre el <span style={{
                                    backgroundImage: `linear-gradient(25deg, #E5A717, #20A026)`,
                                    WebkitTextFillColor: 'transparent',
                                    WebkitBackgroundClip: 'text',
                                }}>Instituto Tecnológico de Hermosillo</span>...
                            </Typography>
                            <List>
                                <ListItem style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <ListItemIcon>
                                        {/* Icono del ITH */}
                                    </ListItemIcon>
                                    <div style={{ marginLeft: '10px' }}>
                                        <ListItemText
                                            primary={<Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold'  }}>Nombre del punto importante</Typography>}
                                            secondary={<Typography variant="body2" style={{  fontFamily: 'Montserrat, sans-serif' }}>
                                                Descripción del punto importante del ITH.
                                            </Typography>}
                                        />
                                    </div>
                                </ListItem>
                                <ListItem style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <ListItemIcon>
                                        {/* Icono del ITH */}
                                    </ListItemIcon>
                                    <div style={{ marginLeft: '10px' }}>
                                        <ListItemText
                                            primary={<Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>Nombre del punto importante</Typography>}
                                            secondary={<Typography variant="body2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                Descripción del punto importante del ITH.
                                            </Typography>}
                                        />
                                    </div>
                                </ListItem>
                            </List>
                            <Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget.
                            </Typography>
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <img
                                src="https://www.elsoldehermosillo.com.mx/local/xr8neb-los-alumnos-buscan-estudiar-ingenieria-en-el-ith/ALTERNATES/LANDSCAPE_768/Los%20alumnos%20buscan%20estudiar%20ingenier%C3%ADa%20en%20el%20ITH"
                                alt="Descripción de la imagen"
                                style={{
                                    width: '400px',
                                    height: '300px',
                                    borderRadius: '10px',
                                    opacity: 0.8,
                                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Sección UES */}
                <div style={{ ...joinSectionStyle, display: 'flex', width: '85%', marginTop: '80px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1, marginRight: '20px' }}>
                            <Typography variant="h4" style={{ color: '#C1BAD7', fontFamily: 'Montserrat, sans-serif', marginBottom: '15px', fontWeight: 'bold' }}>
                                Sobre la <span style={{
                                    backgroundImage: `linear-gradient(25deg, #75604A, #CBAD45)`,
                                    WebkitTextFillColor: 'transparent',
                                    WebkitBackgroundClip: 'text',
                                }}>Universidad Estatal de Sonora</span>...
                            </Typography>
                            <List>
                                <ListItem style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <ListItemIcon>
                                        {/* Icono de la UES */}
                                    </ListItemIcon>
                                    <div style={{ marginLeft: '10px' }}>
                                        <ListItemText
                                            primary={<Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>Nombre del punto importante</Typography>}
                                            secondary={<Typography variant="body2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                Descripción del punto importante de la UES.
                                            </Typography>}
                                        />
                                    </div>
                                </ListItem>
                                <ListItem style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <ListItemIcon>
                                        {/* Icono de la UES */}
                                    </ListItemIcon>
                                    <div style={{ marginLeft: '10px' }}>
                                        <ListItemText
                                            primary={<Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>Nombre del punto importante</Typography>}
                                            secondary={<Typography variant="body2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                Descripción del punto importante de la UES.
                                            </Typography>}
                                        />
                                    </div>
                                </ListItem>
                            </List>
                            <Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget.
                            </Typography>
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <img
                                src="https://expreso.blob.core.windows.net.optimalcdn.com/images/2023/02/20/ues-631fe885-focus-0-0-1300-865.jpg"
                                alt="Descripción de la imagen"
                                style={{
                                    width: '400px',
                                    height: '300px',
                                    borderRadius: '10px',
                                    opacity: 0.8,
                                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                            />
                        </div>
                    </div>
                </div>

            </div>


            <div style={{
                display: 'flex',
                textAlign: 'left',
                marginTop: '250px',
                marginLeft: '-80px',
                position: 'relative',
                overflow: 'visible',
                width: 'calc(100% + 160px)',
                minHeight: '800px',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '-50px',
                    width: 'calc(100% + 100px)',
                    height: 'calc(100% + 100px)',
                    backgroundColor: '#190E3D', 
                    transform: 'rotate(-6deg)', 
                    zIndex: -1,
                }}></div>

                {/* contenido */}
                <div style={{
                    padding: '2em',
                    color: 'white',
                    zIndex: 1,
                }}>

                    {/* Contenido de Texto */}
                    <Typography variant="h4" style={{
                        fontFamily: 'Montserrat, sans-serif',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        fontSize: '50px',
                        marginTop: '120px',
                        color: '#B69FFF',
                    }}>
                        Recursos por y para estudiantes
                    </Typography>
                    <div>
                        <p>lorem ipsum</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutSection;
