"use client";

import React from "react";
import MuxPlayer from "@mux/mux-player-react";
import type { MuxPlayerProps } from "@mux/mux-player-react";

type VideoPlayerProps = {
  playbackId: string;
  title?: string;
  
};

const VideoPlayer = ({ playbackId, title }: VideoPlayerProps) => {
  return (
    <div className="relative w-full max-w-8xl mt-8">
      <MuxPlayer
        playbackId={playbackId}
        accent-color="#171717"
        loop
        metadata={{
          video_title: title || "Untitled Video",
          viewer_user_id: "user-id",
        }}
        streamType="on-demand"
        style={{ width: "100%", height: "80vh" }}
      />
    </div>
  );
};

export default VideoPlayer;
