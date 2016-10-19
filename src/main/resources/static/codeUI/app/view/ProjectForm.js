/*
 * File: app/view/ProjectForm.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Code.view.ProjectForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.projectform',

    requires: [
        'Code.view.ProjectFormViewModel',
        'Code.view.ProjectFormViewController',
        'Ext.form.field.Hidden',
        'Ext.form.field.ComboBox',
        'Ext.form.field.HtmlEditor',
        'Ext.button.Button'
    ],

    controller: 'projectform',
    viewModel: {
        type: 'projectform'
    },
    reference: 'form',
    id: 'projectform',
    itemId: 'projectform',
    bodyPadding: 10,
    title: '项目信息',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'hiddenfield',
            fieldLabel: 'Label',
            name: 'id',
            bind: {
                value: '{model.id}'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: '项目名称',
            name: 'projectName',
            bind: {
                value: '{model.projectName}'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: '备注名',
            name: 'comment',
            bind: {
                value: '{model.comment}'
            }
        },
        {
            xtype: 'combobox',
            fieldLabel: '数据库',
            name: 'databaseName',
            displayField: 'SCHEMA_NAME',
            store: 'DbStore',
            valueField: 'SCHEMA_NAME',
            bind: {
                value: '{model.databaseName}'
            }
        },
        {
            xtype: 'combobox',
            fieldLabel: '代码模板',
            name: 'template',
            displayField: 'name',
            store: 'TemplateStore',
            valueField: 'code',
            bind: {
                value: '{model.template}'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: '路径',
            name: 'path',
            bind: {
                value: '{model.path}'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Group包',
            name: 'groupPackage',
            bind: {
                value: '{model.groupPackage}'
            }
        },
        {
            xtype: 'htmleditor',
            fieldLabel: '项目描述',
            name: 'description',
            bind: {
                value: '{model.description}'
            }
        }
    ],
    dockedItems: [
        {
            xtype: 'container',
            dock: 'bottom',
            padding: 10,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    flex: 1,
                    itemId: 'saveButton',
                    margin: 5,
                    bind: {
                        text: '{btnText}'
                    },
                    listeners: {
                        click: 'save'
                    }
                }
            ]
        }
    ]

});