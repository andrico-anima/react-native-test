import PropTypes from "prop-types";
import React from "react";
import { Icon2 } from "../icons/Icon2";

interface Props {
  name: "envelope" | "phone" | "bookmark" | "arrow-right" | "rocket" | "eye";
}

export const Icon = ({ name }: Props): JSX.Element => {
  return (
    <>
      {["bookmark", "envelope", "eye", "phone", "rocket"].includes(name) && (
        <Image
          style={styles.icon}
          alt="Name rocket"
          source={
            name === "phone"
              ? "https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/name-phone.svg"
              : name === "eye"
                ? "https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/name-eye.svg"
                : name === "bookmark"
                  ? "https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/name-bookmark.svg"
                  : name === "envelope"
                    ? "https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/name-envelope.svg"
                    : "https://generation-sessions.s3.amazonaws.com/963594c070dc0eedef5979dc71f522e2/img/name-rocket.svg"
          }
        />
      )}

      {name === "arrow-right" && <Icon2 />}
    </>
  );
};
