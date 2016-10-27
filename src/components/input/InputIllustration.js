import React from 'react';


const drawIllustrationCommon = (fragments, labels) => {
  let [ line1, line2, line3 ] = [[], [] ,[]];

  if (fragments[0].length >= labels[0].length) {
    line1.push(
      <span key={"1f5"} style={{backgroundColor: "gray"}}>
        <span key={"1f5s"} style={{color: "red"}}>
          {fragments[0].slice(0, 1)}
        </span>
        <span key={"1f5b"} style={{color: "white"}}>
          {fragments[0].slice(1)}
        </span>
      </span>
    );
    line2.push(
      <span key={"2f5"}>
        <span key={"2f5s"} style={{color: "red"}}>|</span>
        {"\u00a0".repeat(fragments[0].length - 1)}
      </span>
    );
    line3.push(
      <span key={"3f5"}>
        <span key={"3f5s"} style={{color: "red"}}>{labels[0]}</span>
        {"\u00a0".repeat(fragments[0].length - labels[0].length)}
      </span>
    );
  } else if (fragments[0].length) {
    line1.push(
      <span key={"1f5"} style={{backgroundColor: "gray"}}>
        <span key={"1f5s"} style={{color: "red"}}>
          {fragments[0].slice(0, 1)}
        </span>
        <span key={"1f5b"} style={{color: "white"}}>
          {fragments[0].slice(1)}
        </span>
      </span>
    );
    line2.push(
      <span key={"2f5"}>{"\u00a0".repeat(fragments[0].length)}</span>
    );
    line3.push(
      <span key={"3f5"}>{"\u00a0".repeat(fragments[0].length)}</span>
    );
  }

  if (fragments[1].length >= labels[1].length + labels[3].length) {
    line1.push(
      <span key={"1c"} style={{backgroundColor: "yellow"}}>
        <span key={"1cl"} style={{color: "cyan"}}>
          {fragments[1].slice(0, 1)}
        </span>
        <span key={"1cc"}>{fragments[1].slice(1, -1)}</span>
        <span key={"1cr"} style={{color: "cyan"}}>
          {fragments[1].slice(-1)}
        </span>
      </span>
    );
    line2.push(
      <span key={"2c"}>
        <span key={"2cl"} style={{color: "cyan"}}>|</span>
        {"\u00a0".repeat(fragments[1].length - 2)}
        <span key={"2cr"} style={{color: "cyan"}}>|</span>
      </span>
    );
    line3.push(
      <span key={"3c"}>
        <span key={"3cl"} style={{color: "cyan"}}>{labels[1]}</span>
        {"\u00a0".repeat(fragments[1].length - labels[1].length - labels[2].length)}
        <span key={"3cr"} style={{color: "cyan"}}>{labels[2]}</span>
      </span>
    );
  } else if (fragments[1].length) {
    if (fragments[1].length >= labels[1].length) {
      line1.push(
        <span key={"1c"} style={{backgroundColor: "yellow"}}>
          <span key={"1cl"} style={{color: "cyan"}}>
            {fragments[1].slice(0, 1)}
          </span>
          <span key={"1cc"}>{fragments[1].slice(1)}</span>
        </span>
      );
      line2.push(
        <span key={"2c"}>
          <span key={"2cl"} style={{color: "cyan"}}>|</span>
          {"\u00a0".repeat(fragments[1].length - 1)}
        </span>
      );
      line3.push(
        <span key={"3c"}>
          <span key={"3cl"} style={{color: "cyan"}}>{labels[1]}</span>
          {"\u00a0".repeat(fragments[1].length - labels[1].length)}
        </span>
      );
    } else {
      line1.push(
        <span key={"1c"} style={{backgroundColor: "yellow"}}>
          <span key={"1cc"}>{fragments[1]}</span>
        </span>
      );
      line2.push(
        <span key={"2c"}>
          {"\u00a0".repeat(fragments[1].length)}
        </span>
      );
      line3.push(
        <span key={"3c"}>
          {"\u00a0".repeat(fragments[1].length)}
        </span>
      );
    }
  }

  if (fragments[2].length >= labels[3].length) {
    line1.push(
      <span key={"1f3"} style={{backgroundColor: "gray"}}>
        <span key={"1f3b"} style={{color: "white"}}>
          {fragments[2].slice(0, -1)}
        </span>
        <span key={"1f3e"} style={{color: "red"}}>
          {fragments[2].slice(-1)}
        </span>
      </span>
    );
    line2.push(
      <span key={"2f3"}>
        {"\u00a0".repeat(fragments[2].length - 1)}
        <span key={"2f3e"} style={{color: "red"}}>|</span>
      </span>
    );
    line3.push(
      <span key={"3f3"}>
        {"\u00a0".repeat(fragments[2].length - labels[3].length)}
        <span key={"3f3e"} style={{color: "red"}}> {labels[3]} </span>
      </span>
    );
  } else if (fragments[2].length) {
    line1.push(
      <span key={"1f3"} style={{backgroundColor: "gray"}}>
        <span key={"1f3b"} style={{color: "white"}}>
          {fragments[2].slice(0, -1)}
        </span>
        <span key={"1f3e"} style={{color: "red"}}>
          {fragments[2].slice(-1)}
        </span>
      </span>
    );
    line2.push(
      <span key={"2f3"}>{"\u00a0".repeat(fragments[2].length)}</span>
    );
    line3.push(
      <span key={"3f3"}>{"\u00a0".repeat(fragments[2].length)}</span>
    );
  }

  return [line1, line2, line3];  
};


const drawIllustration2D = (props) => {
  let { sequence, offset, startPos, endPos } = props;

  let startIdx = startPos + offset - 1;
  let endIdx = endPos + offset - 1;
  let fragments = [];

  if (startIdx <= 20) {
    fragments.push(sequence.slice(0, startIdx));
  } else {
    fragments.push(sequence.slice(0, 10) + '......' + sequence.slice(startIdx - 10, startIdx));
  }
  if (endIdx - startIdx <= 40) {
    fragments.push(sequence.slice(startIdx, endIdx + 1));
  } else {
    fragments.push(sequence.slice(startIdx, startIdx + 20) + '......' + sequence.slice(endIdx - 19, endIdx + 1));
  }
  if (sequence.length - endIdx <= 20) {
    fragments.push(sequence.slice(endIdx + 1));
  } else {
    fragments.push(sequence.slice(endIdx + 1, endIdx + 11) + '......' + sequence.slice(-10));
  }

  let labels = [`${1 - offset}`, `${startPos}`, `${endPos}`, `${sequence.length - offset}`];
  return drawIllustrationCommon(fragments, labels);
};

export class Illustration2D extends React.Component {
  static propTypes = {
    sequence: React.PropTypes.string.isRequired,
    offset: React.PropTypes.number.isRequired,
    startPos: React.PropTypes.number.isRequired,
    endPos: React.PropTypes.number.isRequired
  }

  shouldComponentUpdate = () => (this.props.isRender)

  render() {
    const [ line1, line2, line3 ] = drawIllustration2D(this.props);
    
    return (
      <div style={{ fontFamily: "monospace" }} >
        <p key={"il1"}>{line1}</p>
        <p key={"il2"}>{line2}</p>
        <p key={"il3"}>{line3}</p>
      </div>
    );
  }
};


const drawIllustration3D = (props) => {
  let { sequence, structures, offset, startPos, endPos } = props;

  let startIdx = startPos + offset - 1;
  let endIdx = endPos + offset - 1;

  let fragments = [];
  fragments.push(sequence.slice(0, startIdx));
  fragments.push(sequence.slice(startIdx, endIdx + 1));
  fragments.push(sequence.slice(endIdx + 1));

  let labels = [`${1 - offset}`, `${startPos}`, `${endPos}`, `${sequence.length - offset}`];
  return drawIllustrationCommon(fragments, labels);
};

export class Illustration3D extends React.Component {
  static propTypes = {
    sequence: React.PropTypes.string.isRequired,
    structures: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    offset: React.PropTypes.number.isRequired,
    startPos: React.PropTypes.number.isRequired,
    endPos: React.PropTypes.number.isRequired
  }

  shouldComponentUpdate = () => (this.props.isRender)

  render() {
    const [ line1, line2, line3 ] = drawIllustration3D(this.props);
    
    return (
      <div style={{ fontFamily: "monospace", overflowX: "scroll" }} >
        <p key={"il1"}>{line1}</p>
        <p key={"il2"}>{line2}</p>
        <p key={"il3"}>{line3}</p>
      </div>
    );
  }
}
