import React, { useState } from 'react';
import { AppBar, Button, Typography, IconButton, Toolbar, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const styleLink = {
  color: 'white',
  fontSize: 'small',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'green', // ホバー時に緑色に変わる
  },
};

function Header() {
  // useStateをコンポーネント内で宣言
  const [drawerOpen, setDrawerOpen] = useState(false);

  // ドロワーの開閉を制御する関数
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // ドロワー内のメニュー項目
  const drawerList = (
    <List>
      <ListItem button key="home">
        <ListItemText primary="ホーム" />
      </ListItem>
      <ListItem button key="blog">
        <ListItemText primary="ブログ" />
      </ListItem>
      <ListItem button key="sns">
        <ListItemText primary="SNS" />
      </ListItem>
    </List>
  );

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: 'Black' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)} // メニューを開く
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ポートフォリオ
          </Typography>
          <Button color="inherit" sx={styleLink}>ホーム</Button>
          <Button color="inherit" sx={styleLink}>ブログ</Button>
          <Button color="inherit" sx={styleLink}>SNS</Button>
        </Toolbar>
      </AppBar> 
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)} // メニューを閉じる
        PaperProps={{
          sx: {
            width: '66.67%', // 横幅3分の2に設定
          },
        }}
      >
        {drawerList}
      </Drawer>
    </div>
  );
}

export default Header;
