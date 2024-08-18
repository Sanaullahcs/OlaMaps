import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import instagramIcon from '../../assets/images/Line.svg';

const CustomAccordion = styled(Accordion)({
  margin: 0,
  boxShadow: 'none',
  '&:not(:last-child)': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
  },
});

const RowContainer = styled('div')(({ noMargin }) => ({
  marginTop: noMargin ? '50px' : '100px',
}));

const ExampleComponent = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <RowContainer className='width-heading' noMargin>
        <img src={instagramIcon} alt="Instagram" className="line-img" />
        <Typography className='eco-heading'>Frequently Asked <br /> Questions</Typography>
        <Typography className='eco-subheading-cost'>
          Got questions? We've already got answers.<br />It's like we can hear you thinking.
        </Typography>
      </RowContainer>

      <div className='width-heading padding-accordion'>
        <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ padding: 2 }}
          >
            <Typography className='query-style'>What is Fribe?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Typography className='query-ans'>
              Fribe is your ultimate navigation companion across India, designed to enhance your travel experience. It provides you with meticulously detailed maps, up-to-the-minute traffic updates, and precise turn-by-turn navigation instructions. Our goal is to make your travels as seamless and efficient as possible, utilizing cutting-edge technology to ensure each journey is smoother, faster, and more intuitive than ever before.
            </Typography>
          </AccordionDetails>
        </CustomAccordion>

        <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{ padding: 2 }}
          >
            <Typography className='query-style'>How do I get started with Fribe?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Typography className='query-ans'>
              Fribe is your ultimate navigation companion across India, designed to enhance your travel experience. It provides you with meticulously detailed maps, up-to-the-minute traffic updates, and precise turn-by-turn navigation instructions. Our goal is to make your travels as seamless and efficient as possible, utilizing cutting-edge technology to ensure each journey is smoother, faster, and more intuitive than ever before.
            </Typography>
          </AccordionDetails>
        </CustomAccordion>

        <CustomAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{ padding: 2 }}
          >
            <Typography className='query-style'>How can I contact Fribe for inquiries or support?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Typography className='query-ans'>
              Fribe is your ultimate navigation companion across India, designed to enhance your travel experience. It provides you with meticulously detailed maps, up-to-the-minute traffic updates, and precise turn-by-turn navigation instructions. Our goal is to make your travels as seamless and efficient as possible, utilizing cutting-edge technology to ensure each journey is smoother, faster, and more intuitive than ever before.
            </Typography>
          </AccordionDetails>
        </CustomAccordion>

        <CustomAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{ padding: 2 }}
          >
            <Typography className='query-style'>How do I report an issue or inaccuracy on the map?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Typography className='query-ans'>
              Fribe is your ultimate navigation companion across India, designed to enhance your travel experience. It provides you with meticulously detailed maps, up-to-the-minute traffic updates, and precise turn-by-turn navigation instructions. Our goal is to make your travels as seamless and efficient as possible, utilizing cutting-edge technology to ensure each journey is smoother, faster, and more intuitive than ever before.
            </Typography>
          </AccordionDetails>
        </CustomAccordion>

        <CustomAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            sx={{ padding: 2 }}
          >
            <Typography className='query-style'>How does Fribe ensure my privacy is protected?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Typography className='query-ans'>
              Fribe is your ultimate navigation companion across India, designed to enhance your travel experience. It provides you with meticulously detailed maps, up-to-the-minute traffic updates, and precise turn-by-turn navigation instructions. Our goal is to make your travels as seamless and efficient as possible, utilizing cutting-edge technology to ensure each journey is smoother, faster, and more intuitive than ever before.
            </Typography>
          </AccordionDetails>
        </CustomAccordion>
      </div>
    </>
  );
};

export default ExampleComponent;
