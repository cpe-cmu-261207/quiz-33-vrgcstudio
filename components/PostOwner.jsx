import React from "react";

export default function PostOwner(props) {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/230702237_1875722305941139_5766172626485979415_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEY7TK3DuO9JK_04eqNrqfJobnesa9lrDyhud6xr2WsPMjGToPWOk3-J0KDESsHXv57TivKvu5lxZ7xDHZDsZsD&_nc_ohc=VYTAsLCYyTEAX-67di6&_nc_ht=scontent.fcnx3-1.fna&oh=00_AT-TkP71FjMXKuL-IG1A6bIukZcOU6bJKIN4_zxfTz5yUg&oe=632710B5"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5 text-white">
          Rapepol Nanan 640610664
        </span>
      </div>
      <span className="text-white">
        Quiz ยากจังเลยครับ ของ่าย ๆ กว่านี้ได้ไหม #261207
      </span>
      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>100 คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
}
