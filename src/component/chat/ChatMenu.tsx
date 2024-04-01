// import { Menu, MenuItem, IconButton } from "@mui/material";
// import { FC, ReactNode, useState } from "react";
// type Prop = {
//   children: ReactNode;
//   menuItem: { name: string; type: string }[];
//   fun : any
// };
// const ChatMenu: FC<Prop> = ({ children, menuItem,fun }) => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <IconButton
//         id="basic-button"
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//       >
//         {children}
//         {/* <MoreVertIcon className="text-[#fff]" /> */}
//       </IconButton>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//         }}
//       >
//         {menuItem.map(
//           (value: { name: string; type: string }, index: number) => {
//             return (
//               <MenuItem onClick={handleClose} key={index}>
//                 <input type={value.type}  className="hidden" id="file"  onChange={(e)=>( e?.target?.files)} />
//                 <label htmlFor="file">{value.name}</label>
//               </MenuItem>
//             );
//           }
//         )}
//       </Menu>
//     </div>
//   );
// };
// export default ChatMenu;
