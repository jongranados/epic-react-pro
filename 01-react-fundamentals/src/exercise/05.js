import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// main exercise: 
// const smallBox = <div className='box box--small' style={{backgroundColor: 'lightBlue', fontStyle: 'italic'}}>small lightblue box</div>
// const mediumBox = <div className='box box--medium' style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
// const largeBox = <div className='box box--large' style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// extra credit 1: custom component that superimposes default and passed-in props
// function Box({className = '', style, children, ...otherProps}) { 
//   return (
//     <div 
//       className={`box ${className}`} 
//       style={{fontStyle:'italic', ...style}}
//       {...otherProps}
//     >
//       {children}
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Box className='box--small' style={{backgroundColor: 'lightBlue', fontStyle: 'italic'}}>small lightblue box</Box>
//       <Box className='box--medium' style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</Box>
//       <Box className='box--large' style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</Box>
//       <Box>sizeless box</Box>
//     </div>
//   )
// }

// extra credit 2: accept a size prop to encapsulate styling
function Box({size = '', style, otherProps}) { 
  const boxSizeClass = size ? `box--${size}` : ''; 
  const content = size && style.backgroundColor ? `${size} ${style.backgroundColor} box` : 'sizeless box'
  return (
    <div 
      className={`box ${boxSizeClass}`} 
      style={{fontStyle:'italic', ...style}}
      {...otherProps}
    >
      {content}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size='small' style={{backgroundColor: 'lightblue'}} />
      <Box size='medium' style={{backgroundColor: 'pink'}} />
      <Box size='large' style={{backgroundColor: 'orange'}} />
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
