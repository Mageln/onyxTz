import { useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';

export const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const formatDateWithCapitalMonth = (date) => {
    const options = { day: 'numeric', month: 'long' };
    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      borderRadius: "7.2px",
      background: "rgb(241, 244, 248)",
      justifyContent: 'space-between',
      width: "174.48px",
      height: "38.42px",
      '@media (max-width: 768px)': {
        width: "150px",
        height: "30px",
        fontSize: "12px"
      }
    }}>
      <IconButton onClick={handlePrevDay} style={{
        '@media (max-width: 768px)': {
          padding: "4px"
        }
      }}>
        <ArrowLeftIcon style={{ border: "1px dotted" }} />
      </IconButton>
      <Divider orientation="vertical" variant="fullWidth" style={{
        '@media (max-width: 768px)': {
          height: "20px"
        }
      }} />

      <span style={{
        '@media (max-width: 768px)': {
          fontSize: "12px"
        }
      }}>{formatDateWithCapitalMonth(selectedDate)}</span>

      <Divider orientation="vertical" variant="fullWidth" style={{
        '@media (max-width: 768px)': {
          height: "20px"
        }
      }} />

      <IconButton onClick={handleNextDay} style={{
        '@media (max-width: 768px)': {
          padding: "4px"
        }
      }}>
        <ArrowRightIcon style={{ border: "1px dotted" }} />
      </IconButton>
    </div>
  );
};