import { Paper } from '@mui/material'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
} from '@mui/material';

export const Main = () => {

    const employees = [
        {
            id: 1,
            name: 'Кузьмин Павел',
            avatar: '/src/assets/image.png',
            shifts: 7,
            clients: 12,
            earned: 12900,
            sold: 30,
        },
        {
            id: 2,
            name: 'Гнебеда Андрей',
            avatar: '/src/assets/image2.png',
            shifts: 5,
            clients: 20,
            earned: 19650,
            sold: 12,
        },
        {
            id: 3,
            name: "Копосов Петр",
            avatar: '/src/assets/image3.png',
            shifts: 7,
            clients: 21,
            earned: 20500,
            sold: 25,
        },
        {
            id: 4,
            name: "Борисов Сергей",
            avatar: '/src/assets/image4.png',
            shifts: 7,
            clients: 18,
            earned: 17800,
            sold: 32,
        },

    ];

    const formatEarned = (earned) => {
        const earnedString = earned.toString();
        if (earnedString.length < 3) {
            return earnedString;
        }
        return earnedString.slice(0, 2) + ' ' + earnedString.slice(2);
    };

    return (
        <div style={{
            margin: "37px",
            '@media (max-width: 768px)': {
                margin: "20px"
            }
        }}>
            <TableContainer component={Paper} style={{
                borderRadius: "17px",
                maxWidth: "988%",
                '@media (max-width: 768px)': {
                    maxWidth: "100%"
                }
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{
                                color: "rgb(120, 131, 152)",
                                '@media (max-width: 768px)': {
                                    fontSize: "14px"
                                }
                            }}>Сотрудники</TableCell>
                            <TableCell align="right" style={{
                                color: "rgb(120, 131, 152)",
                                '@media (max-width: 768px)': {
                                    fontSize: "14px"
                                }
                            }} >Кол-во смен</TableCell>
                            <TableCell align="right" style={{
                                color: "rgb(120, 131, 152)",
                                '@media (max-width: 768px)': {
                                    fontSize: "14px"
                                }
                            }} >Клиентов</TableCell>
                            <TableCell align="right" style={{
                                color: "rgb(120, 131, 152)",
                                '@media (max-width: 768px)': {
                                    fontSize: "14px"
                                }
                            }}>Заработано</TableCell>
                            <TableCell align="right" style={{
                                color: "rgb(120, 131, 152)",
                                '@media (max-width: 768px)': {
                                    fontSize: "14px"
                                }
                            }}>Продано</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell component="th" scope="row" style={{
                                    display: "flex",
                                    alignItems: "center",
                                    '@media (max-width: 768px)': {
                                        fontSize: "14px"
                                    }
                                }}>
                                    <Avatar alt={employee.name} src={employee.avatar} />
                                    <b style={{
                                        paddingLeft: "14px",
                                        '@media (max-width: 768px)': {
                                            fontSize: "14px"
                                        }
                                    }}> {employee.name}</b>
                                </TableCell>
                                <TableCell align="right">{employee.shifts}</TableCell>
                                <TableCell align="right">{employee.clients}</TableCell>
                                <TableCell align="right">{formatEarned(employee.earned)}₽</TableCell>
                                <TableCell align="right">{employee.sold}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}