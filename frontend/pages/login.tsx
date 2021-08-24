import Link from 'next/link'
import { styled } from '../stitches.config'
import Image from 'next/image'

import logo from '../components/Full.png'



const Box = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
  height: '880px',
  width:'100%',
  backgroundColor: '#F1F1F1',
})


const Form = styled('form', {
  position:'absolute',
  width: '440px',
  height: '380px',
  backgroundColor: 'white',
  left: 'Calc((50% - 220px))',
  top: '215px',
})

const TLogin = styled('p',{
  position:'absolute',
  left: '32px',
  top: '10px',
  fontFamily: 'Lexend',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '32px', 
  lineHeight: '40px',
  color: '#212126',
})

const Input = styled('input', {
  position:'absolute',
  height:'48px',
  width:'376px',
  left: '32px',
  top: '104px',
  borderRadius: '10px',
  backgroundColor: '#F1F1F1',
})

const Password = styled('input', {
  position:'absolute',
  height:'48px',
  width:'376px',
  left: '32px',
  top: '166px',
  borderRadius: '10px',
  backgroundColor: '#F1F1F1',
})


const Button = styled('button', {
  position:'absolute',
  height:'48px',
  width:'376px',
  left: '32px',
  top: '248px',
  borderRadius: '10px',
  backgroundColor: 'orange',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '20px',
  fontFamily: 'Lexend',
})


const Text = styled('p', {
  position:'absolute',
  height:'20px',
  width:'210px',
  left: '78px',
  top: '328px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '20px',
  fontFamily: 'Lexend',
  color: '#7A7A7D',
})

const Register = styled('a', {
  position:'absolute',
  height:'20px',
  width:'62px',
  left: '300px',
  top: '345px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '20px',
  fontFamily: 'Lexend',
})

const ImageBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '40px',
  backgroundColor: '#F1F1F1',
  
})


// const Expanded = styled(Image, {
//   position: 'absolute',
//   width: '150px',
//   left: '44.86%',
//   right: '44.86%',
//   top: '91.11%',
//   bottom: '4.94%',


//   // backgroundColor: '#F1F1F1',
// })



export default function LoginPage() {
  return (
    <>
    <Box>
    <Form>
      <TLogin>Login</TLogin>
      <Input placeholder={'Username'}/>
      <Password placeholder={'Password'}/>
      <Button>Login</Button>
      <Text>You don't have an account?</Text>
      <Register><Link href="/register">Register</Link></Register>
    </Form>
    </Box>
    <ImageBox>
      <Image src={logo} alt="Unifchat Logo" css={{marginBottom: '40px',}}/>
    </ImageBox>
    </>
    
  );
}
