import React from "react";

type DataType = any[];

type ChildStates = { data: DataType };

type ChildProps = {
  className?: string;
};

export type ComponentWithDataProps<T = DataType> = ChildProps & { data: T };

const withData = (url: string | Function) => (Component: (props: any) => JSX.Element) =>
  class WithDataChild extends React.Component<ChildProps, ChildStates> {
    constructor(props: ChildProps) {
      super(props);

      this.state = {
        data: [],
      };
    }

    componentDidMount(): void {
      console.log("qsl log: this.props: ", this.props);
      const endpoint = typeof url === "function" ? url(this.props) : url;

      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => this.setState({ data }));
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };

export default withData;
