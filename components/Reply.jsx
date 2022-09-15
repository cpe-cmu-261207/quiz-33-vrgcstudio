import React from "react";

export default function Reply(props) {
  return (
    <div className="d-flex gap-2 my-2 ps-5">
      <img
        src={props.userImagePath}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <div
        className="rounded rounded-3 p-2"
        style={{ backgroundColor: "#3A3B3C" }}
      >
        <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
          {props.username}
        </span>
        <br />
        <span style={{ color: "#E4E6EB" }}>{props.replyText}</span>
      </div>
      <div
        className="d-flex align-items-center gap-1"
        style={props.likeNum < 1 ? { display: "none" } : null}
      >
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>{props.likeNum} คน</span>
      </div>
    </div>
  );
}
