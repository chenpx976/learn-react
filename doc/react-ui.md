# 读[react-ui](https://github.com/Lobos/react-ui)源码

## 基础

### button组件

```jsx
<button onClick={this.handleClick.bind(this)}
  style={this.props.style}
  disabled={this.state.disabled}
  className={className}
  type={this.props.type || "button"}>
  { this.state.show || this.props.children }
</button>
```


