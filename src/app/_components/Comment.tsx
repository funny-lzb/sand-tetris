"use client";

import React from "react";
import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <div className="w-full max-w-4xl px-4 pb-12">
      <Giscus
        id="comments"
        repo="funny-lzb/sand-tetris"
        repoId="R_kgDONxryNQ"
        category="Announcements"
        categoryId="DIC_kwDONxryNc4CnG9v"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="zh-CN"
        loading="lazy"
        privacy-preserving="1" // 添加隐私保护选项
      />
    </div>
  );
}
