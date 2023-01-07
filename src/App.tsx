import "./App.css";
import { Button } from "antd";
import { Space } from "antd";
import Plus from "./Icons/Plus";
import { Typography } from "antd";
const { Title } = Typography;

function App() {
  return (
    <div style={{ margin: 8 }}>
      <Title>POC UI KIT ANT DESIGN</Title>
      <div style={{ marginBottom: 8 }}>
        <Title level={2}>High Emphasis with Icon</Title>
        <Space wrap>
          <Button
            type="primary"
            size="small"
            icon={
              <span role="img" aria-label="search" className="anticon">
                <Plus color="#FFF" width={16} height={16} />
              </span>
            }
          >
            Small
          </Button>
          <Button
            type="primary"
            size="middle"
            icon={
              <span role="img" aria-label="search" className="anticon">
                <Plus color="#FFF" width={20} height={20} />
              </span>
            }
          >
            Middle
          </Button>
          <Button
            type="primary"
            size="large"
            icon={
              <span role="img" aria-label="search" className="anticon">
                <Plus color="#FFF" width={24} height={24} />
              </span>
            }
          >
            Large
          </Button>
          <Button
            type="primary"
            size="large"
            disabled={true}
            icon={
              <span role="img" aria-label="search" className="anticon">
                <Plus color="#FFF" width={24} height={24} />
              </span>
            }
          >
            Disabled
          </Button>
        </Space>
      </div>
      <div style={{ marginBottom: 8 }}>
        <Title level={2}>Low Emphasis with Icon</Title>
        <Space wrap>
          <Button
            type="default"
            size="small"
            icon={
              <span role="img" aria-label="search" className="anticon">
                <Plus color="#1c96a3" width={16} height={16} />
              </span>
            }
          >
            Small
          </Button>
          <Button
            type="default"
            icon={
              <span role="img" aria-label="search" className="anticon">
                <Plus color="#1c96a3" width={20} height={20} />
              </span>
            }
          >
            Middle
          </Button>
          <Button
            type="default"
            size="large"
            icon={
              <span role="img" aria-label="search" className="anticon">
                <Plus color="#1c96a3" width={20} height={20} />
              </span>
            }
          >
            Large
          </Button>
          <Button
            type="default"
            size="large"
            disabled={true}
            icon={
              <span role="img" aria-label="search" className="anticon">
                <Plus color="#fff" width={20} height={20} />
              </span>
            }
          >
            Disabled
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default App;
