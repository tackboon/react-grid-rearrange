# react-grid-rearrange

<div align="center">

![application example](https://s4.gifyu.com/images/ezgif.com-gif-maker372d99bc24ebb931.gif)

</div>

## Install

```bash
npm i @tackboon/react-grid-rearrange
```

```bash
yarn add @tackboon/react-grid-rearrange
```

## Usage

```jsx
import { GridContainer, BlockWrapper } from "../dist";

const App = () => {
  return (
    <GridContainer
      totalItem={15}
      itemHeight={100}
      itemWidth={100}
      colGap={10}
      rowGap={20}
    >
      {styles =>
        styles.map((style, i) => {
          return (
            <BlockWrapper index={i} animationStyle={style} key={i}>
              <p>{i}</p>
            </BlockWrapper>
          );
        })
      }
    </GridContainer>
  )
}

```

## Component Properties

#### GridContainer

| Prop                     | Type         | Description                                                                        | Required |
| ------------------------ | ------------ | ---------------------------------------------------------------------------------- | -------- |
| totalItem                | Number       | Specify total block items to handle                                                | true     |
| itemHeight               | Number       | Define block item height                                                           | true     |
| itemWidth                | Number       | Define block item width                                                            | true     |
| rowGap                   | Number       | Define row gap distance in pixel                                                   | false    |
| colGap                   | Number       | Define column gap distance in pixel                                                | false    |
| disableDragOnTouchDevice | Boolean      | Disable drag feature in touch device (default true)                                | false    |
| scrollElementID          | string       | Specify container ID to scroll (default window)                                    | false    |
| cb                       | Function     | Return callback on actions                                                         | false    | 

#### BlockWrapper

| Prop                     | Type         | Description                                                                        | Required |
| ------------------------ | ------------ | ---------------------------------------------------------------------------------- | -------- |
| index                    | Number       | Define item index                                                                  | true     |
| animationStyle           | Object       | Pass in animation style from grid container                                        | true     |
