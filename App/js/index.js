xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":100,
                        "min":50,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":450
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":50,
                        "min":20,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":150,
                        "min":10,
                        "locked":false,
                        "folded":true,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":530
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":120,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
                .setType("horizontal")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#FEDFFF"
                    }
                }),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element1")
                .setLeft("7.5em")
                .setTop("7.5em"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Span")
                .setHost(host,"xui_ui_span3")
                .setLeft("6.583333333333333em")
                .setTop("3.3333333333333335em")
                .setWidth("18.583333333333332em")
                .setHeight("6em")
                .setHtml("This is Span"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Icon")
                .setHost(host,"xui_ui_icon1")
                .setLeft("2.4166666666666665em")
                .setTop("3.3333333333333335em")
                .setWidth("3.5833333333333335em")
                .setHeight("3em")
                .setImageClass("xuifont xui-icon-xui"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element2")
                .setLeft("6.666666666666667em")
                .setTop("5em")
                .setWidth("13.75em")
                .setHeight("6.833333333333333em"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout1")
                .setLeft("-0.08333333333333333em")
                .setTop("16.666666666666668em")
                .setWidth("25.083333333333332em")
                .setHeight("14.166666666666666em")
                .setLayoutData({
                    "rows":5,
                    "cols":5,
                    "rowSetting":{
                        "1":{
                            "manualHeight":50
                        },
                        "2":{
                            "manualHeight":50
                        },
                        "3":{
                            "manualHeight":50
                        },
                        "4":{
                            "manualHeight":50
                        },
                        "5":{
                            "manualHeight":50
                        }
                    }
                }),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Audio")
                .setHost(host,"xui_ui_audio1")
                .setLeft("3.25em")
                .setTop("10em"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setLeft("46.583333333333336em")
                .setTop("10em")
                .setSrc("{xui.ini.img_pic}"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("24.916666666666668em")
                .setTop("11.666666666666666em")
                .setCaption("Native Button"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setLeft("34.083333333333336em")
                .setTop("11.666666666666666em")
                .setCaption("Image Button")
                .setImageClass("xui-icon-xui"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox2")
                .setLeft("43.333333333333336em")
                .setTop("23.333333333333332em")
                .setWidth("12em")
                .setCaption("CheckBox"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput10")
                .setLeft("31.666666666666668em")
                .setTop("26.666666666666668em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Number Input")
                .setType("number"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput11")
                .setLeft("28.333333333333332em")
                .setTop("18.333333333333332em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Drop List Input")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ]),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Slider")
                .setHost(host,"xui_ui_slider1")
                .setLeft("27.416666666666668em")
                .setTop("2.5em")
                .setIsRange(false)
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Slider")
                .setLabelHAlign("left")
                .setValue("0"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.DatePicker")
                .setHost(host,"xui_ui_datepicker1")
                .setLeft("28.333333333333332em")
                .setTop("30em")
                .setValue(new Date(2019,4,15,0,0,0,0)),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Gallery")
                .setHost(host,"xui_ui_gallery3")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
                .setLeft("15em")
                .setTop("27.5em")
                .setValue("a"),
                "main"
            );
            
            append(
                xui.create("xui.UI.PopMenu")
                .setHost(host,"xui_ui_popmenu4")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});