import * as React from "react";

type Props = {
  name: string;
};

type State = {};

export class Main extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): React.ReactNode {
    return <div>{this.props.name}</div>;
  }
}
