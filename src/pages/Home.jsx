import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import { Alert, InputAdornment, Menu, MenuItem, TextField } from '@mui/material';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




export default function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open2, setOpen] = React.useState(false);
    const handleOpen2 = () => setOpen(true);
    const handleClose2 = () => setOpen(false);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    function Signup() {
        return (
            <div>
                <Modal
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Alert severity="success"><p className='text-green-800'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p></Alert>
                        <div className='flex justify-between items-center'>
                            <div className='signup'>
                                <h1 className='text-2xl mt-3 font-bold'>Create Account</h1>
                                <div className='mt-3 p-2'>
                                    <div className='flex'>
                                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                                    </div>
                                    <Box sx={{width: 500,maxWidth: '100%',marginBottom:1, marginTop:1}}>
                                        <TextField fullWidth label="Email" id="fullWidth" />
                                    </Box>
                                    <Box sx={{width: 500,maxWidth: '100%',marginBottom:1}}>
                                        <TextField fullWidth label="Password" id="fullWidth" />
                                    </Box>
                                    <Box sx={{width: 500,maxWidth: '100%',marginBottom:1}}>
                                        <TextField fullWidth label="Confirm Password" id="fullWidth" />
                                    </Box>
                                </div>
                                <div className='rounded-full flex items-center justify-center ' style={{backgroundColor:"#2F6CE5",width:"100%",height:40}}>
                                    <p className='text-lg text-white font-bold'>Create Account</p>
                                </div>
                                <div className='rounded hover:bg-gray-200 flex items-center justify-center bg-gray-100 m-2 ' style={{width:"100%",height:40}}>
                                    <img src="./Group 5.png" alt="" srcset="" />
                                </div>
                                <div className='rounded hover:bg-gray-200 flex items-center justify-center bg-gray-100 m-2 ' style={{width:"100%",height:40}}>
                                    <img src="./Group 6.png" alt="" srcset="" />
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div className='flex justify-end items-center'><p>Already have an account? <span className="hover:text-green-500 hover:cursor-pointer" onClick={()=>{handleClose2(); handleOpen3(); }} style={{ color: "#2F6CE5" }}> Sign In</span></p></div>
                                <img src="./Group 3.png" alt="" />
                                <div className='flex items-center justify-center w-full pl-3'>
                                    <p className="text-xs text-gray-500">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        );
    }

    function Signin() {
        return (
            <div>
                <Modal
                    open={open3}
                    onClose={handleClose3}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Alert severity="success"><p className='text-green-800'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p></Alert>
                        <div className='flex justify-between items-center'>
                            <div className='w-1/2'>
                                <h1 className='text-2xl mt-3 font-bold'>Sign In</h1>
                                <div className='mt-3 p-2'>
                                    <Box sx={{width: 500,maxWidth: '100%',marginBottom:1, marginTop:1}}>
                                        <TextField fullWidth label="Email" id="fullWidth" />
                                    </Box>
                                    <Box sx={{width: 500,maxWidth: '100%',marginBottom:1}}>
                                        <TextField fullWidth label="Password" id="fullWidth" />
                                    </Box>
                                </div>
                                <div className='rounded-full flex items-center justify-center ' style={{backgroundColor:"#2F6CE5",width:"100%",height:40}}>
                                    <p className='text-lg text-white font-bold'>Sign In</p>
                                </div>
                                <div className='rounded hover:bg-gray-200 flex items-center justify-center bg-gray-100 m-2 ' style={{width:"100%",height:40}}>
                                    <img src="./Group 5.png" alt="" srcset="" />
                                </div>
                                <div className='rounded hover:bg-gray-200 flex items-center justify-center bg-gray-100 m-2 ' style={{width:"100%",height:40}}>
                                    <img src="./Group 6.png" alt="" srcset="" />
                                </div>
                                <div className='flex items-center justify-center'><p className='font-bold text-sm'>Forgot Password?</p></div>
                            </div>
                            <div className='w-1/2'>
                                <div className='flex justify-end items-center'><p>Don't have an account yet? <span className="hover:text-green-500 hover:cursor-pointer" onClick={()=>{handleClose3(); handleOpen2();}} style={{ color: "#2F6CE5" }}> Create new for free</span></p></div>
                                <img src="./Group 3.png" alt="" />
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        );
    }

    

    return (
        <div>
            <Signup />
            <Signin />
            <div className="flex items-center gap-2 flex-wrap pt-3 pb-3 justify-around">
                <img src="./whole.png" width={162.57} height={24} alt="not found" srcset="" />
                <div style={{ width: 360, height: 42 }} className="rounded-full p-4 bg-slate-100 flex items-center justify-center">
                    <img src="./Group 28.png" width={22} height={22} alt="" srcset="" />
                    <input type="text" placeholder='Search for your favorite groups in ATG' className='flex-1 bg-transparent' />
                </div>
                <div className='flex items-center justify-center'>
                    <p className="font-bold">Create account. <span onClick={handleOpen2} className="hover:text-green-500 hover:cursor-pointer" style={{ color: "#2F6CE5" }}>It's free!</span></p>
                    <img src="./baseline-arrow_drop_down-24px.png" width={24} height={24} alt="" srcset="" />
                </div>
            </div>
            <div style={{ height: 440, position: 'relative' }} className="w-screen homebg">
                <div className='absolute bottom-20 left-20 z-10'>
                    <p style={{ fontSize: 40, color: "#FFFFFF", fontFamily: "IBM Plex Sans" }} className='font-extrabold'>Computer Engineering</p>
                    <p style={{ fontSize: 19 }} className='text-white'>142,765 Computer Engineers follow this</p>
                </div>
            </div>
            <div className='flex items-center w-screen flex-wrap justify-center mt-10'>
                <div className="w-2/3 flex items-center flex-wrap justify-between gap-2">
                    <div className='flex items-center flex-wrap justify-between gap-5'>
                        <p style={{ fontFamily: "IBM Plex Sans", fontSize: 17 }} className='font-bold'>All Posts(32)</p>
                        <p style={{ fontFamily: "IBM Plex Sans", fontSize: 17 }} className='text-slate-500 font-semibold'>Article</p>
                        <p style={{ fontFamily: "IBM Plex Sans", fontSize: 17 }} className='text-slate-500 font-bold'>Event</p>
                        <p style={{ fontFamily: "IBM Plex Sans", fontSize: 17 }} className='text-slate-500 font-bold'>Education</p>
                        <p style={{ fontFamily: "IBM Plex Sans", fontSize: 17 }} className='text-slate-500 font-bold'>Job</p>
                    </div>
                    <div className='flex items-center justify-between gap-5'>
                        <div style={{ width: 133, height: 36 }} className='bg-slate-300 rounded flex items-center justify-center'>
                            <p className='font-bold'>Write a Post</p>
                            <img src="./baseline-arrow_drop_down-24px.png" width={24} height={24} alt="" srcset="" />
                        </div>
                        <div style={{ width: 125, height: 36, backgroundColor: "#2F6CE5" }} className='rounded gap-2 flex items-center justify-center'>
                            <img src="./Vector.png" width={24} height={24} alt="" srcset="" />
                            <p className='font-bold text-white'>Join Group</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 flex items-center justify-center'>
                <div style={{ height: 2 }} className='w-2/3 bg-slate-400'></div>
            </div>
            <div className='flex flex-wrap items-center w-screen justify-center mt-10'>
                <div className="boxdiv flex items-start justify-start">
                    <div className='boxdiv overflow-hidden'>
                        <div className='mb-3 boxi  border-slate-400 rounded border-2'>
                            <div style={{ height: 280, backgroundColor: "#C4C4C4" }} className="overflow-hidden">
                                <img src="./art.jpg" alt="mks" srcset="" />
                            </div>
                            <p style={{ fontFamily: "IBM Plex Sans" }} className='text-lg p-3 font-extrabold mt-3'>✍️ Article</p>
                            <div className='flex items-start justify-between p-3'>
                                <p className='w-2/3 font-bold text-2xl'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
                                <div className='w-1/3 flex justify-end items-start'>
                                    <img onClick={handleClick} src="./Group 35.png" alt="" />
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                                        <MenuItem onClick={handleClose}>Report</MenuItem>
                                        <MenuItem onClick={handleClose}>Like</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                            <p className="text-gray-500 pl-3 text-xl">I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='flex items-center justify-between p-3'>
                                <div className='flex items-center justify-center gap-2'>
                                    <img src="Rectangle 3.png" width={50} height={50} alt="" srcset="" />
                                    <p className='font-bold text-lg'>Sarthak Kamra</p>
                                </div>
                                <div className='flex items-center justify-center gap-5 flex-wrap'>
                                    <img src="Group.png" width={100} height={100} alt="" srcset="" />
                                    <div className="bg-gray-300 flex items-center justify-center h-8 w-9">
                                        <img src="baseline-share-24px.png" width={20} height={20} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3  border-slate-400 rounded border-2'>
                            <div style={{ height: 280, backgroundColor: "#C4C4C4" }} className="overflow-hidden">
                                <img src="./edu.jpg" alt="" />
                            </div>
                            <p style={{ fontFamily: "IBM Plex Sans" }} className='text-lg p-3 font-extrabold mt-3'>🔬️ Education</p>
                            <div className='flex items-start justify-between p-3'>
                                <p className='w-2/3 font-bold text-2xl'>Tax Benefits for Investment under National Pension Scheme launched by Government</p>
                                <div className='w-1/3 flex justify-end items-start'>
                                    <img onClick={handleClick} src="./Group 35.png" alt="" />
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                                        <MenuItem onClick={handleClose}>Report</MenuItem>
                                        <MenuItem onClick={handleClose}>Like</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                            <p className="text-gray-500 pl-3 text-xl">I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='flex items-center justify-between p-3'>
                                <div className='flex items-center justify-center gap-2'>
                                    <img src="Rectangle 4.png" width={50} height={50} alt="" srcset="" />
                                    <p className='font-bold text-lg'>Sarah West</p>
                                </div>
                                <div className='flex items-center justify-center gap-5 flex-wrap'>
                                    <img src="Group.png" width={100} height={100} alt="" srcset="" />
                                    <div className="bg-gray-300 flex items-center justify-center h-8 w-9">
                                        <img src="baseline-share-24px.png" width={20} height={20} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3  border-slate-400 rounded border-2'>
                            <div style={{ height: 280, backgroundColor: "#C4C4C4" }} className="overflow-hidden">
                                <img src="./meet.jpg" alt="" />
                            </div>
                            <p style={{ fontFamily: "IBM Plex Sans" }} className='text-lg p-3 font-extrabold mt-3'>🗓️ Meetup</p>
                            <div className='flex items-start justify-between p-3'>
                                <p className='w-2/3 font-bold text-2xl'>Finance & Investment Elite Social Mixer @Lujiazui</p>
                                <div className='w-1/3 flex justify-end items-start'>
                                    <img onClick={handleClick} src="./Group 35.png" alt="" />
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                                        <MenuItem onClick={handleClose}>Report</MenuItem>
                                        <MenuItem onClick={handleClose}>Like</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-9 p-3'>
                                <div className='flex items-center justify-center gap-2'>
                                    <CalendarMonthIcon />
                                    <p className='font-bold'>Fri, 12 Oct, 2018</p>
                                </div>
                                <div className='flex items-center justify-center gap-2'>
                                    <PlaceIcon />
                                    <p className='font-bold'>Ahmedabad, India</p>
                                </div>
                            </div >
                            <div className='flex items-center justify-center border border-gray-400 m-3 p-2 ml-5 rounded-lg mr-5 border-1'>
                                <p className='text-red-500 font-bold'>Visit Website</p>
                            </div>
                            <div className='flex items-center justify-between p-3'>
                                <div className='flex items-center justify-center gap-2'>
                                    <img src="Rectangle 5.png" width={50} height={50} alt="" srcset="" />
                                    <p className='font-bold text-lg'>Ronal Jones</p>
                                </div>
                                <div className='flex items-center justify-center gap-5 flex-wrap'>
                                    <img src="Group.png" width={100} height={100} alt="" srcset="" />
                                    <div className="bg-gray-300 flex items-center justify-center h-8 w-9">
                                        <img src="baseline-share-24px.png" width={20} height={20} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3  border-slate-400 rounded border-2'>
                            <div style={{ height: 280, backgroundColor: "#C4C4C4" }} className="overflow-hidden">
                                <img src="./job.jpg" alt="" />
                            </div>
                            <p style={{ fontFamily: "IBM Plex Sans" }} className='text-lg p-3 font-extrabold mt-3'>💼️ Job</p>
                            <div className='flex items-start justify-between p-3'>
                                <p className='w-2/3 font-bold text-2xl'>Software Developer</p>
                                <div className='w-1/3 flex justify-end items-start'>
                                    <img onClick={handleClick} src="./Group 35.png" alt="" />
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                                        <MenuItem onClick={handleClose}>Report</MenuItem>
                                        <MenuItem onClick={handleClose}>Like</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-9 p-3'>
                                <div className='flex items-center justify-center gap-2'>
                                    <EventIcon />
                                    <p className='font-bold'>Innovaccer Analytics Private Ltd.</p>
                                </div>
                                <div className='flex items-center justify-center gap-2'>
                                    <PlaceIcon />
                                    <p className='font-bold'>Noida, India</p>
                                </div>
                            </div >
                            <div className='flex items-center justify-center border border-gray-400 m-3 p-2 ml-5 rounded-lg mr-5 border-1'>
                                <p className='text-green-500 font-bold'>Apply on Timesjobs</p>
                            </div>
                            <div className='flex items-center justify-between p-3'>
                                <div className='flex items-center justify-center gap-2'>
                                    <img src="Rectangle 6.png" width={50} height={50} alt="" srcset="" />
                                    <p className='font-bold text-lg'>Joseph Gray</p>
                                </div>
                                <div className='flex items-center justify-center gap-5 flex-wrap'>
                                    <img src="Group.png" width={100} height={100} alt="" srcset="" />
                                    <div className="bg-gray-300 flex items-center justify-center h-8 w-9">
                                        <img src="baseline-share-24px.png" width={20} height={20} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 boxcom items-center justify-start h-full flex flex-col'>
                        <div className='flex w-2/3 items-center justify-between'>
                            <div className='flex items-center justify-center gap-2'>
                                <PlaceIcon />
                                <p >Noida, India</p>
                            </div>
                            <img src="./baseline-edit-24px.png" width={20} height={20} alt="" srcset="" />
                        </div>
                        <div style={{ backgroundColor: "gray", height: 1 }} className='flex mt-3 w-2/3 items-center justify-between'></div>
                        <div className='flex items-start justify-around gap-3 w-2/3 mt-10'>
                            <img style={{ marginTop: 3 }} src="./Vector3.png" width={20} height={20} alt="" />
                            <p className='text-sm text-gray-600'>Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}
