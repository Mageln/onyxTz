import { DatePicker } from '../DatePicker/DatePicker'
import { Button, Paper } from '@mui/material'

export const Header = () => {
    return (
        <Paper elevation={0} style={{
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: "17px",
            margin: "37px",
            '@media (max-width: 768px)': {
                padding: '8px',
                margin: '20px'
            }
        }}>
            <div>
                <h2 style={{
                    '@media (max-width: 768px)': {
                        fontSize: '18px'
                    }
                }}>Сотрудники</h2>
                <p style={{
                    color: "rgb(148, 156, 172)",
                    '@media (max-width: 768px)': {
                        fontSize: '12px'
                    }
                }}>Выберите подходящий период</p>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                '@media (max-width: 768px)': {
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }
            }}>
                <div style={{
                    paddingRight: "35px",
                    '@media (max-width: 768px)': {
                        paddingRight: '0px',
                        marginBottom: '10px'
                    }
                }}>
                    <DatePicker />
                </div>
                <Button style={{
                    width: "98px",
                    height: "38px",
                    background: "rgb(241, 244, 248)",
                    borderRadius: "7px",
                    color: "rgb(37, 47, 64)",
                    marginRight: "17px",
                    '@media (max-width: 768px)': {
                        width: '80px',
                        height: '30px',
                        fontSize: '12px'
                    }
                }}>Неделя</Button>
                <Button style={{
                    width: "98px",
                    height: "38px",
                    background: "rgb(241, 244, 248)",
                    borderRadius: "7px",
                    color: "rgb(37, 47, 64)",
                    marginRight: "17px",
                    '@media (max-width: 768px)': {
                        width: '80px',
                        height: '30px',
                        fontSize: '12px'
                    }
                }}>Месяц</Button>
                <Button style={{
                    width: "98px",
                    height: "38px",
                    background: "rgb(241, 244, 248)",
                    borderRadius: "7px",
                    color: "rgb(37, 47, 64)",
                    marginRight: "17px",
                    '@media (max-width: 768px)': {
                        width: '80px',
                        height: '30px',
                        fontSize: '12px'
                    }
                }}>Год</Button>
                <Button style={{
                    width: "151px",
                    height: "38px",
                    background: "rgb(37, 47, 64)",
                    borderRadius: "7px",
                    color: "rgb(255,255,255)",
                    '@media (max-width: 768px)': {
                        width: '120px',
                        height: '30px',
                        fontSize: '12px'
                    }
                }}>Выбрать период</Button>
            </div>
        </Paper>
    )
}