import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Login.css'
import insta from '../Assets/Instagram.jpg'
import bg from '../Assets/insta.png'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import {useContext,useState,useEffect} from 'react'
import { makeStyles } from '@mui/styles'; 
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link ,useNavigate} from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AuthContext } from '../context/AuthContext';


export default function Login() {
    const store=useContext(AuthContext);
    console.log(store);
    const useStyles=makeStyles({
        text1 : {
            color : 'grey',
            textAlign : 'center'
        },
        text2 : {
            textAlign : 'center'
        },
        card2 : {
            height : '7vh',
            marginTop : '2%'
        }
    })
    const classes=useStyles();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [loading,setLoading] =useState(false);
    const navigate=useNavigate();
    const {login}=useContext(AuthContext);

    const handleClick=async()=>{
        try{
            setError('');
            setLoading(true);
            let res=await login(email,password);
            setLoading(false);
            navigate('/')
        }catch(err){
            setError(err);
            setTimeout(()=>{
                setError('')
            },2000);
            setLoading(false);
        }
    }
  return (
    <div className='Loginwrapper'> 
        <div className='imgcar' style={{backgroundImage : 'url('+bg+')',backgroundSize : 'cover'}}>
            <div className='car'>
            <CarouselProvider
                visibleSlides={1}
                totalSlides={5}
                naturalSlideHeight={423}
                naturalSlideWidth={238}
                hasMasterSpinner={true}
                isPlaying={true}
                infinite={true}
                dragEnabled={false}
                touchEnabled={false}
                totalSlides={5}
            >
                <Slider>
                <Slide index={0}><Image src={img1}/></Slide>
                <Slide index={1}><Image src={img2}/></Slide>
                <Slide index={2}><Image src={img3}/></Slide>
                <Slide index={3}><Image src={img4}/></Slide>
                <Slide index={4}><Image src={img5}/></Slide>

                </Slider>
            </CarouselProvider>
            </div>
        </div>
        <div className='Logincard'>
            <Card variant='outlined'>
                <div className='insta-logo'>
                    <img src={insta} alt=""></img> 
                </div>
                <CardContent>
                    {error!='' && <Alert severity="error">{error}</Alert>}
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Typography className={classes.text2} color='primary' variant='subtitle1'>
                        forgot Password ?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" fullWidth={true} variant='contained' onClick={handleClick} disabled={loading}> 
                        Login
                    </Button>
                </CardActions>
            </Card>
            <Card variant='outlined' size='small' className={classes.card2}>
                <CardContent>
                    <Typography  className={classes.text1} variant="subtitle1" >
                        Don't an account ? <Link to='/signup' style={{textDecoration : 'none'}}>Signup</Link>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
