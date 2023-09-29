import replace from "gulp-replace";
import plumber from "gulp-plumber";
import notify	from "gulp-notify";
import browserSync from "browser-sync"; // local Server
import newer from 'gulp-newer';
import ifPlugin from "gulp-if";

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browserSync: browserSync,
	newer: newer,
	if: ifPlugin
}