import React, { Component } from 'react';
import "./EditGroup.css"

export default class EditGroup extends Component {
    render() {
        return (
            <div class="content-wrapper">
            <div class="normal-wrap wrap">
                <h3 class="main-title">Edit Group</h3>
                <div class="row">
                    <form class="form-horizontal wrap">
                        <div class="grid-block">
                            <div class="grid grid-265">
                                <div class="inner-grid">
                                    <h3 class="sub-ttl">Group Image</h3>
                                    <div class="upload-img">
                                    <img src={require("../../img/group-2.png")} />
                                    </div>
                                    <div class="button-wrap-t30">
                                        <a href="#" class="button button-upload">Upload New</a>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-50">
                                <div class="inner-grid">
                                    <h3 class="sub-ttl">Group Information</h3>
                                    <div class="form-group fld-tbl">
                                        <div class="fld-lbl fld-cell">Group Name:</div>
                                        <div class="fld-ipt fld-cell">
                                            <input type="text" name="gname" class="input-field" placeholder="" value="Trading Para"/>
                                        </div>
                                    </div>
                                    <div class="form-group fld-tbl">
                                        <div class="fld-lbl fld-cell">Group Description:</div>
                                        <div class="fld-ipt fld-cell">
                                            <textarea class="input-field textarea" name="desc">Lorem ipsum dolor sit amet, consectetur ad ipiscing elit. Aenean vulputate ex vel augue consequat, sed porttitor tellus pharetra.
        Phasellus non risus dignissim, mollis antenon, dapibus ante. Donec a gravida mauris. Nam pellentesque suscipit ante, sit amet venenatis lectus ultrices placerat. Donec sodales tincid unt pellentesque. Interdum et an malesuada fames ac ante ipsum primis in faucibus.
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="form-group fld-tbl">
                                        <div class="fld-lbl fld-cell">Admins:</div>
                                        <div class="fld-ipt fld-cell">
                                            <input type="text" name="gname" class="input-field" placeholder="" value="Jaso|"/>
                                        </div>
                                    </div>
                                    <div class="form-group fld-tbl">
                                        <div class="fld-lbl fld-cell"></div>
                                        <div class="fld-ipt fld-cell names">
                                            <input type="text" name="gname" class="input-field" disabled placeholder="" value="Martin Garrix"/>
                                            <input type="text" name="gname" class="input-field" disabled placeholder="" value="Jason More"/>
                                            <input type="text" name="gname" class="input-field" disabled placeholder="" value="Ricky Martin"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-50 mr-0 unheight">
                                <div class="inner-grid">
                                    <h3 class="sub-ttl">Telegram Group Ids</h3>
                                    <div class="form-group fld-tbl">
                                        <div class="fld-lbl fld-cell">Free Channel:</div>
                                        <div class="fld-ipt fld-cell">
                                            <input type="text" name="gname" class="input-field" placeholder="" value="Lorem Ipsum"/>
                                        </div>
                                    </div>
                                    <div class="form-group fld-tbl">
                                        <div class="fld-lbl fld-cell">Premium Channel:</div>
                                        <div class="fld-ipt fld-cell">
                                            <input type="text" name="gname" class="input-field" placeholder="" value="Dummy Text"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="inner-grid bottom-grid">
                                    <h3 class="sub-ttl">Subscription Settings</h3>
                                    <div class="form-group fld-tbl">
                                        <div class="fld-lbl fld-cell">Wallet Id:</div>
                                        <div class="fld-ipt fld-cell">
                                            <input type="text" name="gname" class="input-field" placeholder="" value="Lorem Ipsum"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="span-ttl">Subscription Packages: <a href="#" class="action add-select"><span class="fa fa-plus"></span></a></div>
                                    </div>
                                    <div class="form-group fld-tbl selects">
                                        <div class="fld-cell sm">Months</div>
                                        <div class="fld-cell lg">BTC Amount</div>
                                    </div>
                                    <div class="form-group fld-tbl selects">
                                        <div class="fld-cell sm">
                                            <select class="input-field">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                        <div class="fld-cell lg">
                                            <input type="text" class="input-field" value="0.65412398"/>
                                        </div>
                                        <div class="fld-cell xx">
                                        <a href="#" class="action"><img src={require("../../img/ic-times.png")}  class='fa'/></a>
                                        </div>
                                    </div>
                                    <div class="form-group fld-tbl selects">
                                        <div class="fld-cell sm">
                                            <select class="input-field">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                        <div class="fld-cell lg">
                                            <input type="text" class="input-field" value="0.65412398"/>
                                        </div>
                                        <div class="fld-cell xx">
                                        <a href="#" class="action"><img src={require("../../img/ic-times.png")}  class='fa'/></a>
                                        </div>
                                    </div>
                                    <div class="form-group fld-tbl selects">
                                        <div class="fld-cell sm">
                                            <select class="input-field">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                        <div class="fld-cell lg">
                                            <input type="text" class="input-field" value="0.65412398"/>
                                        </div>
                                        <div class="fld-cell xx">
                                        <a href="#" class="action"><img src={require("../../img/ic-times.png")}  class='fa'/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="note button-wrap">
                            <a href="#" class="default-btn stc-17">UPDATE</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}