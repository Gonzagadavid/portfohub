"use client";
import * as icons from "simple-icons/icons";

export const iconsTitles = Object.keys(icons).map((title) =>
  title.replace("si", "")
);

export const iconsTitlesSet = new Set(iconsTitles);
