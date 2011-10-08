/**
 * Copyright (c) 2010 Peter Nitsch
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @author Peter Nitsch
 * http://jsterm.com
 * http://www.peternitsch.net
 */

/* Color constants. */
const BLACK_NORMAL = "#000000";
const BLACK_BOLD = "#545454";
const RED_NORMAL = "#a80000";
const RED_BOLD = "#fc5454";
const GREEN_NORMAL = "#00a800";
const GREEN_BOLD = "#54fc54";
const YELLOW_NORMAL = "#a85400";
const YELLOW_BOLD = "#fcfc54";
const BLUE_NORMAL = "#0000a8";
const BLUE_BOLD = "#5454fc";
const MAGENTA_NORMAL = "#a800a8";
const MAGENTA_BOLD = "#fc54fc";
const CYAN_NORMAL = "#00a8a8";
const CYAN_BOLD = "#54fcfc";
const WHITE_NORMAL = "#a8a8a8";
const WHITE_BOLD = "#fcfcfc";

/* The namespace. Everything comes from within the namespace. */
var jsTerm = new (function () {
    /* A font description. */
    this.Font = function () {
        this.width = 8;
        this.height = 16;
        this.lineHeight = 23;
    }

    /* A basic point class. */
    this.Point = function () {
        this.x = 0;
        this.y = 0;
    };

    this.ByteArray = function (bytes){
        this.position = 0;
        this.stringdata = bytes;
    };

    this.ByteArray.prototype = {
        readUnsignedByte: function () {
            var b = this.stringdata.charCodeAt(this.position);
            if (this.position != this.stringdata.length) {
                this.position++;
            }
            return b;
        },
        bytesAvailable: function () {
            return this.stringdata.length - this.position;
        },
        length: function () {
            return this.stringdata.length;
        },
    };

    /* A terminal. This is the main entrypoint for things. */
    this.Term = function () {
        this.VERSION = "0.2 alpha";
    };
})();

var TERM = TERM || new jsTerm.Term();
