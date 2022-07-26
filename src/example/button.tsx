import { Nav, Button } from '../../components'

function ButtonEx() {
  return (
    <div className="App">
      <div>按钮类型</div>
      <Button className="demo-button" type="default">默认按钮</Button>
      <Button className="demo-button" type="danger">错误按钮</Button>
      <Button className="demo-button" type="success">成功按钮</Button>
      <Button className="demo-button" type="warning">警告按钮</Button>
      {/* <Button size="mini">mini button</Button> */}
      <div>按钮尺寸</div>
      <Button className="demo-button" type="primary" size="full">normal button</Button>
      <Button className="demo-button" type="primary" size="normal">normal button</Button>
      <Button className="demo-button" type="primary" size="small">small button</Button>
      <Button className="demo-button" type="primary" size="mini">mini button</Button>
    </div>
  )
}

export default ButtonEx
