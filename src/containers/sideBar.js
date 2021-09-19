import React, { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { SocketContext } from "../utils/context";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div>
      <div>
        <form noValidate autoComplete="off">
          <div>
            <div>
              <p>Account Info</p>
              <input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me}>
                <button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={(e) => e.preventDefault()}
                >
                  Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
            <div>
              <p>Make a call</p>
              <input
                label="ID to call"
                value={idToCall}
                onChange={(e) => {
                  e.preventDefault();
                  setIdToCall(e.target.value);
                }}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault();
                    leaveCall();
                  }}
                >
                  Hang Up
                </button>
              ) : (
                <button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault();
                    callUser(idToCall);
                  }}
                >
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
