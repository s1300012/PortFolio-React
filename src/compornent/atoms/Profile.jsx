import { Box, List, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Myimage from '../../static/logo192.png'

const data = [
  { technology: 'HTML/CSS', ratings: [1, 2, 3, 4, 5] },
  { technology: 'JavaScript', ratings: [1, 2, 3, 4, 5] },
  { technology: 'React', ratings: [1, 2, 3, 4, 5] },
];

export default function Profile() {
  return (
    <div>
      <Typography variant='h3' sx={{
        display:"flex",
        justifyContent: "center",
        marginBottom: 5
      }}>
        プロフィール
      </Typography>
      <Box  display="flex"
      justifyContent="center" // 中央寄せ
      >

        <Toolbar >
          <List sx={{}}>
            <ListItemText primary="名前：" />
            <ListItemText primary="性別：" />
            <ListItemText primary="年齢：" />
          </List>
          <img
          src={Myimage}
          alt="プロフィール写真"
          style={{ borderRadius: '50%', width: '100px', height: '100px', marginLeft: '80px' }} // 画像スタイル
        />
        </Toolbar>
      </Box>
      <Typography variant='h5' marginLeft={10}>
        扱える言語
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>技術</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">5</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.technology}>
                <TableCell>{row.technology}</TableCell>
                {row.ratings.map((rating, index) => (
                  <TableCell key={index} align="center">{rating}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
