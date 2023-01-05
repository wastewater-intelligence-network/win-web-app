import React, {useState} from 'react';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	// <Button>
	// <FaArrowCircleUp onClick={scrollToTop}
	// style={{display: visible ? 'inline' : 'none'}} />
	// </Button>

     <Fab color="primary" onClick={scrollToTop} className="scrollTopButton" style={{display: visible ? 'inline' : 'none'}}>
        <NavigationIcon  />
        
      </Fab>
);
}

export default ScrollButton;
