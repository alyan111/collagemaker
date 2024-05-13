import React from 'react';
import Stack from '@mui/material/Stack';
import ViewSwitchButtonGroup from './ViewSwitchButtonGroup';
// import Stack from '@mui/material/Stack';
import TextButtonLink from '@/Components/TextButtonLink';


const ActionBar = ({ handleChange, actions, headerOptions, children }) => {
  return (
    <Stack direction={'row'}>
      <Stack direction={'row'} sx={{
        marginRight: "5px"
      }}>
        {
          children
        }
        {
          // Object.entries(headerOptions).map(([key, value]) => {
          //   return (
          //     // <TextButtonLink key={key} href={route(`${value}`, {type})}> 
          //     <TextButtonLink key={key} href={route(value, { "type": type })}>
          //       {key}
          //     </TextButtonLink>
          //   )
          // })
          Object.entries(headerOptions).map(([key, value]) => {
            if (value['type'] == "link") {
              return (
                <TextButtonLink key={key} href={route(value['href'])}>
                  {value['title']}
                </TextButtonLink>
              )
            }
            if (value['type'] == "action") {
              return (
                <TextButtonLink key={key} type={value['type']} action={actions[value['title']]}>
                  {value['title']}
                </TextButtonLink>
              )
            }
            if (value['type'] == "modal") {
              return (
                <TextButtonLink type={value['type']} key={key} href={value['href']} handleChange={handleChange} >
                  {value['title']}
                </TextButtonLink>
              )
            }
          })

        }
      </Stack>
      {handleChange && <ViewSwitchButtonGroup handleChange={handleChange} />}
    </Stack>
  )
}

export default ActionBar;