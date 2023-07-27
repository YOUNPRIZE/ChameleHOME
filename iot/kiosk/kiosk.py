# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'kiosk.ui'
##
## Created by: Qt User Interface Compiler version 6.5.1
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide2.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide2.QtGui import (QBrush, QColor, QConicalGradient, QCursor,
    QFont, QFontDatabase, QGradient, QIcon,
    QImage, QKeySequence, QLinearGradient, QPainter,
    QPalette, QPixmap, QRadialGradient, QTransform)
from PySide2.QtWidgets import (QApplication, QColumnView, QFrame, QLabel,
    QMainWindow, QMenuBar, QPlainTextEdit, QPushButton,
    QSizePolicy, QSlider, QStatusBar, QTextBrowser,
    QWidget)
import icon_rc
import icon_rc

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        if not MainWindow.objectName():
            MainWindow.setObjectName(u"MainWindow")
        MainWindow.resize(1024, 600)
        MainWindow.setAutoFillBackground(False)
        MainWindow.setStyleSheet(u"background-color: rgb(250, 245, 240);")
        self.centralwidget = QWidget(MainWindow)
        self.centralwidget.setObjectName(u"centralwidget")
        self.widget = QWidget(self.centralwidget)
        self.widget.setObjectName(u"widget")
        self.widget.setGeometry(QRect(560, 120, 331, 91))
        self.columnView = QColumnView(self.widget)
        self.columnView.setObjectName(u"columnView")
        self.columnView.setGeometry(QRect(10, 10, 81, 81))
        self.columnView.setStyleSheet(u"border-image: url(:/newPrefix/led.png);\n"
"border-radius: 25%;")
        self.horizontalSlider = QSlider(self.widget)
        self.horizontalSlider.setObjectName(u"horizontalSlider")
        self.horizontalSlider.setGeometry(QRect(110, 30, 221, 41))
        self.horizontalSlider.setStyleSheet(u"selection-color: rgb(157, 178, 151);\n"
"")
        self.horizontalSlider.setMaximum(255)
        self.horizontalSlider.setSingleStep(3)
        self.horizontalSlider.setOrientation(Qt.Horizontal)
        self.widget_2 = QWidget(self.centralwidget)
        self.widget_2.setObjectName(u"widget_2")
        self.widget_2.setGeometry(QRect(50, 350, 391, 141))
        self.widget_2.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"border-radius: 25%;")
        self.humid_img = QColumnView(self.widget_2)
        self.humid_img.setObjectName(u"humid_img")
        self.humid_img.setGeometry(QRect(20, 20, 101, 101))
        self.humid_img.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"border-image: url(:/newPrefix/humid.png);\n"
"border-radius: 25%")
        self.humid_unit = QTextBrowser(self.widget_2)
        self.humid_unit.setObjectName(u"humid_unit")
        self.humid_unit.setGeometry(QRect(250, 10, 131, 121))
        self.humid_unit.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"border-radius: 25%")
        self.humid_val = QLabel(self.widget_2)
        self.humid_val.setObjectName(u"humid_val")
        self.humid_val.setGeometry(QRect(130, 30, 121, 71))
        self.humid_val.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"color: \"#778465\";\n"
"font-weight: \"Bolder\";\n"
"font: 700 62pt \"\ub9d1\uc740 \uace0\ub515\";\n"
"")
        self.widget_3 = QWidget(self.centralwidget)
        self.widget_3.setObjectName(u"widget_3")
        self.widget_3.setGeometry(QRect(50, 150, 391, 141))
        self.widget_3.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"border-radius: 25%;")
        self.temp_img = QColumnView(self.widget_3)
        self.temp_img.setObjectName(u"temp_img")
        self.temp_img.setGeometry(QRect(0, 10, 131, 121))
        self.temp_img.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"border-image: url(:/newPrefix/temp.png);\n"
"border-image: url(:/newPrefix/temp.png);\n"
"border-radius: 25%")
        self.temp_unit = QTextBrowser(self.widget_3)
        self.temp_unit.setObjectName(u"temp_unit")
        self.temp_unit.setGeometry(QRect(250, 10, 111, 101))
        self.temp_unit.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"border-image: url(:/newPrefix/temperature_celsius_icon_137115.png);\n"
"border-radius: 25%")
        self.temp_val = QLabel(self.widget_3)
        self.temp_val.setObjectName(u"temp_val")
        self.temp_val.setGeometry(QRect(124, 30, 121, 71))
        self.temp_val.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"color: \"#778465\";\n"
"font-weight: \"Bolder\";\n"
"font: 700 62pt \"\ub9d1\uc740 \uace0\ub515\";\n"
"")
        self.fan_btn = QPushButton(self.centralwidget)
        self.fan_btn.setObjectName(u"fan_btn")
        self.fan_btn.setGeometry(QRect(660, 270, 81, 81))
        self.fan_btn.setStyleSheet(u"color: rgb(157, 178, 151);\n"
"background-color: rgb(255, 255, 255);\n"
"border-radius:25%;\n"
"font: 700 22pt \"\ub9d1\uc740 \uace0\ub515\";")
        self.heat_img = QColumnView(self.centralwidget)
        self.heat_img.setObjectName(u"heat_img")
        self.heat_img.setGeometry(QRect(790, 270, 81, 81))
        self.heat_img.setStyleSheet(u"border-image: url(:/newPrefix/heater.png);\n"
"border-radius: 25%;")
        self.waterfall_img = QColumnView(self.centralwidget)
        self.waterfall_img.setObjectName(u"waterfall_img")
        self.waterfall_img.setGeometry(QRect(570, 430, 81, 81))
        self.waterfall_img.setStyleSheet(u"border-image: url(:/newPrefix/waterfall.png);\n"
"border-radius: 25%;")
        self.humidifier_img = QColumnView(self.centralwidget)
        self.humidifier_img.setObjectName(u"humidifier_img")
        self.humidifier_img.setGeometry(QRect(790, 430, 81, 81))
        self.humidifier_img.setStyleSheet(u"border-image: url(:/newPrefix/humidifier.png);\n"
"border-radius: 25%;")
        self.heat_btn = QPushButton(self.centralwidget)
        self.heat_btn.setObjectName(u"heat_btn")
        self.heat_btn.setGeometry(QRect(880, 270, 81, 81))
        self.heat_btn.setStyleSheet(u"color: rgb(157, 178, 151);\n"
"background-color: rgb(255, 255, 255);\n"
"border-radius:25%;\n"
"font: 700 22pt \"\ub9d1\uc740 \uace0\ub515\";")
        self.waterfall_btn = QPushButton(self.centralwidget)
        self.waterfall_btn.setObjectName(u"waterfall_btn")
        self.waterfall_btn.setGeometry(QRect(660, 430, 81, 81))
        self.waterfall_btn.setStyleSheet(u"color: rgb(157, 178, 151);\n"
"background-color: rgb(255, 255, 255);\n"
"border-radius:25%;\n"
"font: 700 22pt \"\ub9d1\uc740 \uace0\ub515\";")
        self.humidifier_btn = QPushButton(self.centralwidget)
        self.humidifier_btn.setObjectName(u"humidifier_btn")
        self.humidifier_btn.setGeometry(QRect(880, 430, 81, 81))
        self.humidifier_btn.setStyleSheet(u"color: rgb(157, 178, 151);\n"
"background-color: rgb(255, 255, 255);\n"
"border-radius:25%;\n"
"font: 700 22pt \"\ub9d1\uc740 \uace0\ub515\";")
        self.fan_img = QColumnView(self.centralwidget)
        self.fan_img.setObjectName(u"fan_img")
        self.fan_img.setGeometry(QRect(570, 270, 81, 81))
        self.fan_img.setStyleSheet(u"border-image: url(:/newPrefix/fan.png);\n"
"border-radius: 25%;")
        self.widget_4 = QWidget(self.centralwidget)
        self.widget_4.setObjectName(u"widget_4")
        self.widget_4.setGeometry(QRect(270, 10, 511, 91))
        self.widget_4.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"border-radius: 25%;")
        self.frame = QFrame(self.widget_4)
        self.frame.setObjectName(u"frame")
        self.frame.setGeometry(QRect(10, 10, 120, 80))
        self.frame.setStyleSheet(u"border-image: url(:/newPrefix/retile01.png);\n"
"border-radius: 25%;")
        self.frame.setFrameShape(QFrame.StyledPanel)
        self.frame.setFrameShadow(QFrame.Raised)
        self.plainTextEdit = QPlainTextEdit(self.widget_4)
        self.plainTextEdit.setObjectName(u"plainTextEdit")
        self.plainTextEdit.setGeometry(QRect(140, 10, 341, 81))
        self.plainTextEdit.setStyleSheet(u"font: 700 36pt \"\ub9d1\uc740 \uace0\ub515\";\n"
"color: rgb(5, 148, 81);\n"
"background-color: rgb(255, 255, 255);")
        self.temperature_lock = QWidget(self.centralwidget)
        self.temperature_lock.setObjectName(u"temperature_lock")
        self.temperature_lock.setGeometry(QRect(800, 210, 161, 51))
        self.temperature_lock.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"border-radius: 25%;")
        self.lock_img = QWidget(self.temperature_lock)
        self.lock_img.setObjectName(u"lock_img")
        self.lock_img.setGeometry(QRect(20, 10, 31, 31))
        self.lock_img.setStyleSheet(u"border-image: url(:/newPrefix/lock.png);")
        self.temp_lock_btn = QPushButton(self.temperature_lock)
        self.temp_lock_btn.setObjectName(u"temp_lock_btn")
        self.temp_lock_btn.setGeometry(QRect(50, 10, 111, 31))
        self.temp_lock_btn.setStyleSheet(u"color: rgb(157, 178, 151);\n"
"background-color: rgb(255, 255, 255);\n"
"border-radius: 50%;\n"
"font: 700 18pt \"\ub9d1\uc740 \uace0\ub515\";")
        self.humidity_lock = QWidget(self.centralwidget)
        self.humidity_lock.setObjectName(u"humidity_lock")
        self.humidity_lock.setGeometry(QRect(800, 370, 161, 51))
        self.humidity_lock.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"border-radius: 25%;")
        self.widget_8 = QWidget(self.humidity_lock)
        self.widget_8.setObjectName(u"widget_8")
        self.widget_8.setGeometry(QRect(20, 10, 31, 31))
        self.widget_8.setStyleSheet(u"border-image: url(:/newPrefix/lock.png);")
        self.humid_lock_btn = QPushButton(self.humidity_lock)
        self.humid_lock_btn.setObjectName(u"humid_lock_btn")
        self.humid_lock_btn.setGeometry(QRect(50, 10, 111, 31))
        self.humid_lock_btn.setStyleSheet(u"color: rgb(157, 178, 151);\n"
"background-color: rgb(255, 255, 255);\n"
"border-radius: 50%;\n"
"font: 700 18pt \"\ub9d1\uc740 \uace0\ub515\";")
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QMenuBar(MainWindow)
        self.menubar.setObjectName(u"menubar")
        self.menubar.setGeometry(QRect(0, 0, 1024, 22))
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QStatusBar(MainWindow)
        self.statusbar.setObjectName(u"statusbar")
        MainWindow.setStatusBar(self.statusbar)

        self.retranslateUi(MainWindow)
        self.fan_btn.clicked.connect(MainWindow.fan_on)
        self.heat_btn.clicked.connect(MainWindow.heat_on)
        self.waterfall_btn.clicked.connect(MainWindow.waterfall_on)
        self.humidifier_btn.clicked.connect(MainWindow.humidifier_on)
        self.temp_lock_btn.clicked.connect(MainWindow.temp_lock)
        self.humid_lock_btn.clicked.connect(MainWindow.humid_lock)

        QMetaObject.connectSlotsByName(MainWindow)
    # setupUi

    def retranslateUi(self, MainWindow):
        MainWindow.setWindowTitle(QCoreApplication.translate("MainWindow", u"MainWindow", None))
        self.humid_unit.setHtml(QCoreApplication.translate("MainWindow", u"<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><meta charset=\"utf-8\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"hr { height: 1px; border-width: 0; }\n"
"li.unchecked::marker { content: \"\\2610\"; }\n"
"li.checked::marker { content: \"\\2612\"; }\n"
"</style></head><body style=\" font-family:'\ub9d1\uc740 \uace0\ub515'; font-size:9pt; font-weight:400; font-style:normal;\">\n"
"<p align=\"center\" style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-family:'Sans Serif'; font-size:70pt; font-weight:600; color:#72836e;\">%</span></p></body></html>", None))
        self.humid_val.setText(QCoreApplication.translate("MainWindow", u"23", None))
        self.temp_unit.setHtml(QCoreApplication.translate("MainWindow", u"<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><meta charset=\"utf-8\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"hr { height: 1px; border-width: 0; }\n"
"li.unchecked::marker { content: \"\\2610\"; }\n"
"li.checked::marker { content: \"\\2612\"; }\n"
"</style></head><body style=\" font-family:'\ub9d1\uc740 \uace0\ub515'; font-size:9pt; font-weight:400; font-style:normal;\">\n"
"<p align=\"center\" style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p></body></html>", None))
        self.temp_val.setText(QCoreApplication.translate("MainWindow", u"23", None))
        self.fan_btn.setText(QCoreApplication.translate("MainWindow", u"ON", None))
        self.heat_btn.setText(QCoreApplication.translate("MainWindow", u"ON", None))
        self.waterfall_btn.setText(QCoreApplication.translate("MainWindow", u"ON", None))
        self.humidifier_btn.setText(QCoreApplication.translate("MainWindow", u"ON", None))
        self.plainTextEdit.setPlainText(QCoreApplication.translate("MainWindow", u"\ud30c \ucda9 \ub958 \uce58 \uc6d0 ", None))
        self.temp_lock_btn.setText(QCoreApplication.translate("MainWindow", u"LOCK", None))
        self.humid_lock_btn.setText(QCoreApplication.translate("MainWindow", u"LOCK", None))
    # retranslateUi

