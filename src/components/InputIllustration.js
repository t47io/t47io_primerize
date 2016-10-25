import React from 'react';


const drawIllustration2D = (sequence, offset, startPos, endPos) => {
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

  let labels = [(1 - offset).toString(), startPos.toString(), endPos.toString(), (sequence.length - offset).toString()];
  let [ line1, line2, line3 ] = [[], [] ,[]];

  if (fragments[0].length >= labels[0].length) {
    line1.push(
      <span style={{backgroundColor: "gray"}}>
        <span style={{color: "red"}}>
          {fragments[0].slice(0, 1)}
        </span>
        <span style={{color: "white"}}>
          {fragments[0].slice(1)}
        </span>
      </span>
    );
    line2.push(
      <span>
        <span style={{color: "red"}}>|</span>
        {" ".repeat(fragments[0].length - 1)}
      </span>
    );
    line3.push(
      <span>
        <span style={{color: "red"}}>{labels[0]}</span>
        {" ".repeat(fragments[0].length - labels[0].length)}
      </span>
    );
  } else if (fragments[0].length) {
    line1.push(
      <span style={{backgroundColor: "gray"}}>
        <span style={{color: "red"}}>
          {fragments[0].slice(0, 1)}
        </span>
        <span style={{color: "white"}}>
          {fragments[0].slice(1)}
        </span>
      </span>
    );
    line2.push(
      <span>{" ".repeat(fragments[0].length)}</span>
    );
    line3.push(
      <span>{" ".repeat(fragments[0].length)}</span>
    );
  }

  if (fragments[1].length >= labels[1].length + labels[3].length) {
    line1.push(
      <span style={{backgroundColor: "yellow"}}>
        <span style={{color: "cyan"}}>
          {fragments[1].slice(0, 1)}
        </span>
        <span>{fragments[1].slice(1, -1)}</span>
        <span style={{color: "cyan"}}>
          {fragments[1].slice(-1)}
        </span>
      </span>
    );
    line2.push(
      <span>
        <span style={{color: "cyan"}}>|</span>
        {" ".repeat(fragments[1].length - 2)}
        <span style={{color: "cyan"}}>|</span>
      </span>
    );
    line3.push(
      <span>
        <span style={{color: "cyan"}}>{labels[1]}</span>
        {" ".repeat(fragments[1].length - labels[1].length - labels[2].length)}
        <span style={{color: "cyan"}}>{labels[2]}</span>
      </span>
    );
  } else if (fragments[1].length) {
    if (fragments[1].length >= labels[1].length) {
      line1.push(
        <span style={{backgroundColor: "yellow"}}>
          <span style={{color: "cyan"}}>
            {fragments[1].slice(0, 1)}
          </span>
          <span>{fragments.slice(1)}</span>
        </span>
      );
      line2.push(
        <span>
          <span style={{color: "cyan"}}>|</span>
          {" ".repeat(fragments[1].length - 1)}
        </span>
      );
      line3.push(
        <span>
          <span style={{color: "cyan"}}>{labels[1]}</span>
          {" ".repeat(fragments[1].length - labels[1].length)}
        </span>
      );
    } else {
      line1.push(
        <span style={{backgroundColor: "yellow"}}>
          <span style={{color: "cyan"}}>
            {fragments[1]}
          </span>
        </span>
      );
      line2.push(
        <span>
          {" ".repeat(fragments[1].length)}
        </span>
      );
      line3.push(
        <span>
          {" ".repeat(fragments[1].length)}
        </span>
      );
    }
  }

  if (fragments[2].length >= labels[3].length) {
    line1.push(
      <span style={{backgroundColor: "gray"}}>
        <span style={{color: "white"}}>
          {fragments[2].slice(0, -1)}
        </span>
        <span style={{color: "red"}}>
          {fragments[2].slice(-1)}
        </span>
      </span>
    );
    line2.push(
      <span>
        {" ".repeat(fragments[2].length - 1)}
        <span style={{color: "red"}}>|</span>
      </span>
    );
    line3.push(
      <span>
        {" ".repeat(fragments[2].length - labels[3].length)}
        <span style={{color: "red"}}> {labels[3]} </span>
      </span>
    );
  } else if (fragments[2].length) {
    line1.push(
      <span style={{backgroundColor: "gray"}}>
        <span style={{color: "white"}}>
          {fragments[2].slice(0, -1)}
        </span>
        <span style={{color: "red"}}>
          {fragments[2].slice(-1)}
        </span>
      </span>
    );
    line2.push(
      <span>{" ".repeat(fragments[2].length)}</span>
    );
    line3.push(
      <span>{" ".repeat(fragments[2].length)}</span>
    );
  }

  return [line1, line2, line3];
};

const Illustration2D = ({
  sequence,
  offset,
  startPos,
  endPos
}) => {
  const [ line1, line2, line3 ] = drawIllustration2D(sequence, offset, startPos, endPos);
  return (
    <div style={{ fontFamily: "monospace" }} >
      <p>{line1}</p>
      <p>{line2}</p>
      <p>{line3}</p>
    </div>
  );
};
Illustration2D.propTypes = {
  sequence: React.PropTypes.string.isRequired,
  offset: React.PropTypes.number.isRequired,
  startPos: React.PropTypes.number.isRequired,
  endPos: React.PropTypes.number.isRequired,
};


export { Illustration2D };
