import React from "react";

interface InnerProps {
  name?: string;
}

interface InnerState {
  innerWidth: number;
}

export type HoCProps = InnerProps & Partial<InnerState>;

const withInnerWidth = (Component: React.FC<InnerProps>) =>
  class Choose extends React.Component<HoCProps> {
    constructor(props: InnerProps) {
      super(props);

      this.state = {
        innerWidth: window.innerWidth,
      };

      this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
      this.setState({
        innerWidth: window.innerWidth,
      });
    }

    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };

export default withInnerWidth;
